package sample.vo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections.map.HashedMap;

import lombok.Data;

@Data
public class AccountVO {
	private String accountCode;
	private String accountName;
	private String ac_product;
	private String ac_productName;
	private int ac_classcode;
	private String ac_assetDivision;
	private String assetName;
	private int rN;
	private int chk;
	private List<String> accountCodeList;
	private List<String >ac_productList;
	private Map<String, ?> saveMap; 
	
	 public String[] strToArray(String dataList) {  	
		  return dataList.split(","); 
	  }
	 
	 public List<String> arrayToList(String[] array) {
		 List<String> list = Arrays.asList(array);
		 return list;
	 }
	 
	 public List<AccountVO> voToList(List<String> accountCodeList, List<String> productList){
		 //사용할 빈 객체, 변수 선언
		 List<AccountVO> list = new ArrayList<>();
		 int i = 0;
		 
		 for(String ar : accountCodeList) {
			 AccountVO vo = new AccountVO();
			 vo.setAccountCode(ar);
			 vo.setAc_product(productList.get(i));
			 list.add(vo);
			 i++;
		 }

		 return list;
	 }
	 
}
