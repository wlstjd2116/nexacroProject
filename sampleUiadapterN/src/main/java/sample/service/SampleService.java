package sample.service;

import java.util.List;

import sample.vo.AccountVO;
import sample.vo.AssetVO;
import sample.vo.ClassVO;
import sample.vo.InspectionVO;
import sample.vo.SampleVO;
import sample.vo.SearchConditionVO;

public interface SampleService {
	List<SampleVO> selectSampleList(SearchConditionVO searchInfo)  throws Exception;
	
	//분류코드 읽기
	public List<ClassVO> selectClassList(SearchConditionVO searchVO) throws Exception;

	//점검항목 읽기
	public List<InspectionVO> selectInspectionList() throws Exception;
	
	// 데이터 추가 수정 삭제
	void updateSampleList ( List<SampleVO> sampleList)  throws Exception;
	
	// 자산구분 읽기
	public List<AssetVO> selectAssetList() throws Exception;
	
	// 계정 읽기
	public List<AccountVO> selectAccountList() throws Exception;
	
	// rownum으로 계정 읽기
	public List<AccountVO> selectAccountList(SearchConditionVO searchVO) throws Exception;
	
	// 자산항목으로 계정 읽기
	public List<AccountVO> accountForAssetList(AssetVO assetVO) throws Exception;
	
	// 계정 체크박스로 옮기기
	public void moveAccount(SearchConditionVO searchVO) throws Exception;
	
	// 셀 분류코드 저장에 쓰이는 것
	public int saveClassCode(SearchConditionVO searchVO) throws Exception;
	
	// 체크박스로 계정코드 삭제
	public void removeAccount(List<AccountVO> vo) throws Exception;

	// 팝업 셀 클릭 시 값 가져오기
	public ClassVO popupCellDetail(ClassVO vo) throws Exception;
	
	// 팝업 세이브 전 insert
	public void prePopupSave(ClassVO vo) throws Exception;
	
	// 팝업 세이브
	public void popupSave(ClassVO vo) throws Exception;
	
	// 점검항목 이름 중복 방지
	public int isExistInsItem(ClassVO vo) throws Exception;
	
	// 팝업세이브 전 항목 일치값 없는지 확인
	public int isExistClassItem(ClassVO vo) throws Exception;
	
	// 분류명 업데이트
	public void changeClassName(ClassVO vo) throws Exception;
	
	// 분류코드 삭제 
	public void deleteClassCode(ClassVO vo) throws Exception;
}
