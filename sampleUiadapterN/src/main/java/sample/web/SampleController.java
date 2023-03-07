package sample.web;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import sample.service.SampleService;
import sample.service.impl.SampleMapper;
import sample.vo.SearchConditionVO;
import sample.vo.AccountVO;
import sample.vo.AssetVO;
import sample.vo.ClassVO;
import sample.vo.InspectionVO;
import sample.vo.SampleVO;

@Controller
public class SampleController {
  private Logger logger = LoggerFactory.getLogger(SampleController.class);
      
  @Resource(name = "sampleService")
  private SampleService sampleService;
      
  
  private int saveClassCode;
  private int saveCellNum;
  private String saveInspectionId;
  
  @RequestMapping(value = "/selectSampleList.do")
  public NexacroResult selectSampleList (
      @ParamDataSet(name = "input1") SearchConditionVO searchVo
  )  throws Exception
  {
    logger.debug("ds_search >>> " + searchVo);
    
    List<SampleVO> userList = sampleService.selectSampleList(searchVo);
    
    NexacroResult result = new NexacroResult();
    
    result.addDataSet("output1", userList);
    
    return result;
  }    
  
  // 메인 조회버튼, 자산항목, 분류항목, 계정항목, 점검항목
  @RequestMapping(value = "/selectMainList.do")
  public NexacroResult selectMainList(@ParamDataSet(name = "inputInspection") SearchConditionVO searchVo) throws Exception {
	  

	  List<ClassVO> classList = sampleService.selectClassList(searchVo);
	  List<InspectionVO> inspectionList = sampleService.selectInspectionList();
	  List<AssetVO> assetList = sampleService.selectAssetList();
	  List<AccountVO> accountList = sampleService.selectAccountList();
	  NexacroResult result = new NexacroResult();
	  
	  result.addDataSet("output1", classList);
	  result.addDataSet("inspectionList", inspectionList);
	  result.addDataSet("assetList",assetList);
	  result.addDataSet("accountList", accountList);
	  return result;
  }
  
  // 점검항목과 자산항목 ComboBox를 불러오는 Controller. 
  @RequestMapping(value = "/selectInspectionList.do")
  public NexacroResult selectMainList() throws Exception {
	  List<InspectionVO> inspectionList = sampleService.selectInspectionList();
	  List<AssetVO> assetList = sampleService.selectAssetList();
	  NexacroResult result = new NexacroResult();
	  
	  result.addDataSet("inspectionList", inspectionList);
	  result.addDataSet("assetList",assetList);
	  return result;
  }
  
 
  // 자산구분 기준으로 계정코드 검색하기
  @RequestMapping(value="/selectAccountForAsset.do")
  public NexacroResult selectAccountForAsset(@ParamDataSet(name="inputAsset") AssetVO assetVO) throws Exception {
	  
	  NexacroResult result = new NexacroResult();
	  
	  List<AccountVO> accForAssetList = sampleService.accountForAssetList(assetVO);
	  
	  result.addDataSet("resAccountForAssetList",accForAssetList);
	  
	  return result;
  }
  
//셀 클릭해서 분류코드별 계정코드에 값을 불러오는 Controller
 @RequestMapping(value = "/cellClick.do")
 public NexacroResult cellClick(@ParamDataSet(name= "inputCellNum") SearchConditionVO searchVo ) throws Exception {
	  NexacroResult result = new NexacroResult();
	  
	  List<AccountVO> accountList = sampleService.selectAccountList(searchVo);

	  // 분류코드의 값을 saveClassCode에 저장시켜 두고, 나중에 분류코드별 계정 옮기기에서 불러온다.
	  saveClassCode = sampleService.saveClassCode(searchVo);
	  saveCellNum = searchVo.getCellNum();
	  saveInspectionId = searchVo.getInspectionId();
	  
	  result.addDataSet("cellResult", accountList);
	  return result; 
 }
  
  // 계정코드를 분류코드별 기준으로 옮기기
  @RequestMapping(value = "/moveAccount.do")
  public NexacroResult moveAccount(@ParamDataSet(name="inputDataList") SearchConditionVO VO) throws Exception{	  
	  NexacroResult result = new NexacroResult();  
		  
	  // 넥사크로에서 받아온 값을 배열로 변경하는 설정
	  String[] newDtList = VO.newDataList(VO.getDataList());
	  String[] productDivList = VO.newDataList(VO.getAc_product());

	  // array to list
	  List<String> dtList = VO.arrayToList(newDtList);
	  List<String> productList = VO.arrayToList(productDivList);
	  
	  // 정보를 가진 객체를 담은 list
	  List<SearchConditionVO> dataList = VO.voToList(dtList, productList);
	  
	  
	  // cell 클릭 시 저장해놓은 정보 불러서 VO에 셋팅, 다시 불러오기
	  VO.setClassCode(saveClassCode);
	  VO.setCellNum(saveCellNum);
	  VO.setInspectionId(saveInspectionId);
	  
	  // VO에 dataList 셋팅
	  VO.setObtainList(dataList);

	  sampleService.moveAccount(VO);
	  List<AccountVO> aList = sampleService.selectAccountList(VO);
	  	  
	  result.addDataSet("moveAccountRes",aList);
	  return result;
  }
  
  // 분류코드별 계정코드 삭제
  @RequestMapping(value = "/removeAccount.do")
  public NexacroResult removeAccount(@ParamDataSet(name="inputDataList") AccountVO accVo) throws Exception {
	  
	  NexacroResult result = new NexacroResult();
	  SearchConditionVO searchVO = new SearchConditionVO();
	  
	  // 받아온 string 값을 array로 변환
	  String[] accCodeToArray = accVo.strToArray(accVo.getAccountCode());
	  String[] accProductToArray = accVo.strToArray(accVo.getAc_product());
	  
	  // array를 list로 변환
	  List<String> accCodeToList = accVo.arrayToList(accCodeToArray);
	  List<String> accProductToList = accVo.arrayToList(accProductToArray);
	  
	  // accountVO가 들어있는 List로 변환하는 메서드
	  List<AccountVO> accountList = accVo.voToList(accCodeToList, accProductToList);
	  
	  // 선택된 값 제거
	  sampleService.removeAccount(accountList);
	  
	  // 다시 불러 올 값 셋팅
	  searchVO.setClassCode(saveClassCode);
	  searchVO.setCellNum(saveCellNum);
	  searchVO.setInspectionId(saveInspectionId);
	 
	  List<AccountVO> reCallAccountList = sampleService.selectAccountList(searchVO);
	  
	  result.addDataSet("removeAccountRes",reCallAccountList);
	  return result;
  }
  
  @RequestMapping(value="/popupCellClick.do")
  public NexacroResult popupCellClick(@ParamDataSet(name="detail") ClassVO vo ) throws Exception{
	  NexacroResult result = new NexacroResult();
	  
	  System.out.println("###################### "+vo);
	  
	  ClassVO classVO = sampleService.popupCellDetail(vo);
	  
	  result.addDataSet("result",classVO);
	  
	  return result;
  }
  
  @RequestMapping(value="/popupSave.do")
  public NexacroResult popupSave(@ParamDataSet(name="input") ClassVO vo, SearchConditionVO svo) throws Exception{
	 NexacroResult result = new NexacroResult();
	 int isExistClassItem = sampleService.isExistClassItem(vo);

	 // 신규-저장
	 if(vo.getMode().equals("1")) {
		 if(isExistClassItem >= 1) {
			 String msg = "분류코드가 중복되는지 확인해주세요.";
			 svo.setMsg(msg);
			 result.addDataSet("msg", svo);
			 System.out.println(msg);
			 
			 return result;
		 }
		 sampleService.popupSave(vo);
		 
		 return result;
	 }else { // 수정 - 저장
		 sampleService.changeClassName(vo);
		 return result;
	 }
  }
  
  // 팝업삭제
  @RequestMapping(value="/deleteClassCode.do")
  public NexacroResult deleteClassCode(@ParamDataSet(name="delete") ClassVO vo) throws Exception{
	  NexacroResult result = new NexacroResult();
	  
	  sampleService.deleteClassCode(vo);
	  
	  return result;
  }
}