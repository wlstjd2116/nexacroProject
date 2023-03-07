package sample.vo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import lombok.Data;

@Data
public class SearchConditionVO {
  // Fields
  private String inspectionId;
  private String ac_product;
  private String dataList;
  private int cellNum;
  private int classCode;
  private List<?> obtainList;
  private String msg;
  
  
  public String[] newDataList(String dataList) {  	
	  return dataList.split(","); 
  }
  
  // VO가 담긴 LIST로 변환하는 메서드 
  public List<SearchConditionVO> voToList(List<String> accountCodeList, List<String>  productList){
		 //사용할 빈 객체, 변수 선언
		 List<SearchConditionVO> list = new ArrayList<>();
		 int i = 0;
		 
		 for(String ar : accountCodeList) {
			 SearchConditionVO vo = new SearchConditionVO();
			 vo.setDataList(ar);
			 vo.setAc_product(productList.get(i));
			 list.add(vo);
			 i++;
		 }
		 return list;
	 }
  
  //ARRAY TO LIST 
  public List<String> arrayToList(String[] array) {
		 List<String> list = Arrays.asList(array);
		 return list;
  }
  
}