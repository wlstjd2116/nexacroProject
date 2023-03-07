package sample.service.impl;

import java.util.Arrays;
import java.util.List;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import sample.service.SampleService;
import sample.vo.SearchConditionVO;
import sample.vo.AccountVO;
import sample.vo.AssetVO;
import sample.vo.ClassVO;
import sample.vo.InspectionVO;
import sample.vo.SampleVO;

import egovframework.rte.fdl.cmmn.exception.FdlException;
import egovframework.rte.fdl.idgnr.EgovIdGnrService;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;

@Service("sampleService")
public class SampleServiceImpl implements SampleService { 
  /** ID Generation */
  @Resource(name = "egovIdGnrService")
  private EgovIdGnrService egovIdGnrService;
  
  @Resource(name = "sampleMapper")
  private SampleMapper sampleMapper;
  
  @Override
  public List<SampleVO> selectSampleList(SearchConditionVO searchInfo) throws Exception{
    return sampleMapper.selectSampleList(searchInfo);
  }
  
    @Override
    public void updateSampleList(List<SampleVO> sampleList) throws Exception{
    int size = sampleList.size();
    for (int i=0; i<size; i++) {
      SampleVO sample = sampleList.get(i);
        
      if(sample instanceof DataSetRowTypeAccessor) {
        DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) sample;
            
        if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED) {
          String id = null;
                    
          try {
            //getNextStringId 사용시 FdlException 이 발생할수있어 필수 catch
            id = egovIdGnrService.getNextStringId();
            
            sample.setId(id);
            
            sampleMapper.insertSampleList(sample);
          
          } catch (FdlException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
          }
                
        }else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
          sampleMapper.updateSampleList(sample);              
        }else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED) {
          sampleMapper.deleteSampleList(sample);              
        }
      }
    }        
    }

	@Override
	public List<ClassVO> selectClassList(SearchConditionVO searchVO) throws Exception {
		return sampleMapper.selectClassList(searchVO);
	}

	@Override
	public List<InspectionVO> selectInspectionList() throws Exception {
		return sampleMapper.selectInspectionList();	
	}

	// 자산읽기
	@Override
	public List<AssetVO> selectAssetList() throws Exception {
		return sampleMapper.selectAssetList();
	}

	// 계정읽기
	@Override
	public List<AccountVO> selectAccountList() throws Exception {
		return sampleMapper.selectAccountList();
	}

	// 셀 클릭으로 계정 읽기
	@Override
	public List<AccountVO> selectAccountList(SearchConditionVO searchVO) throws Exception {
		return sampleMapper.cellAccountList(searchVO);
	} 
	
	// 자산 구분으로 계정 읽기
	@Override
	public List<AccountVO> accountForAssetList(AssetVO assetVO) throws Exception {
		return sampleMapper.accountForAssetList(assetVO);
	}

	// 계정 체크박스로 옮기기
	@Override
	public void moveAccount(SearchConditionVO searchVO) throws Exception {
		sampleMapper.moveAccount(searchVO);
	}

	// 셀 분류코드 저장
	@Override
	public int saveClassCode(SearchConditionVO searchVO) throws Exception {
		return sampleMapper.saveClassCode(searchVO);
	}
	
	// 체크박스 버튼으로 계정코드 삭제
	@Override
	public void removeAccount(List<AccountVO> vo) throws Exception {
		sampleMapper.removeAccount(vo);
	}

	// 팝업 셀 클릭시 값 가져오기
	@Override
	public ClassVO popupCellDetail(ClassVO vo) throws Exception {
		return sampleMapper.popupCellDetail(vo);
	}

	@Override
	public void prePopupSave(ClassVO vo) throws Exception {
		sampleMapper.prePopupSave(vo);
		
	}

	@Override
	public void popupSave(ClassVO vo) throws Exception {
		sampleMapper.popupSave(vo);
		
	}

	@Override
	public int isExistInsItem(ClassVO vo) throws Exception {
		return sampleMapper.isExistInsItem(vo);
	}

	@Override
	public void changeClassName(ClassVO vo) throws Exception {
		sampleMapper.changeClassName(vo);
	}

	@Override
	public int isExistClassItem(ClassVO vo) throws Exception {
		return sampleMapper.isExistClassItem(vo);
	}

	@Override
	public void deleteClassCode(ClassVO vo) throws Exception {
		sampleMapper.deleteClassCode(vo);
	}
}