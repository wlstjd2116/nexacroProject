package sample;

import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;

public class RowTypeVO implements DataSetRowTypeAccessor {
    private int rowType;
  
    @Override
    public int getRowType() {
        return this.rowType;
    }

    @Override
    public void setRowType(int rowType) {
        this.rowType = rowType;
    }
}