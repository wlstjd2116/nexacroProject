package sample.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClassVO {
	private int classCode;
	private String className;
	private String inspectionItem;
	private String inspectionId;
	private String mode;
}
