(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PopUp");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(650,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"inspectionId\" type=\"STRING\" size=\"256\"/><Column id=\"inspectionItem\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_class_code", this);
            obj._setContents("<ColumnInfo><Column id=\"분류코드\" type=\"INT\" size=\"256\"/><Column id=\"코드명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspection", this);
            obj._setContents("<ColumnInfo><Column id=\"inspectionId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cellClickSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"classCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cellDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"inspectionItem\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_trsf", this);
            obj._setContents("<ColumnInfo><Column id=\"inspectionItem\" type=\"STRING\" size=\"256\"/><Column id=\"classCode\" type=\"STRING\" size=\"256\"/><Column id=\"className\" type=\"STRING\" size=\"256\"/><Column id=\"mode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("alerts", this);
            obj._setContents("<ColumnInfo><Column id=\"msg\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","21","30","159","41",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("분류코드 등록");
            obj.set_font("18px/normal \"함초롬바탕 확장\" bold");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","22","82","285","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","21","81","90","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("  한도 점검항목");
            obj.set_background("#d3d3d3");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","110","82","196","37",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_search");
            obj.set_codecolumn("inspectionId");
            obj.set_datacolumn("inspectionItem");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","22","129","285","431",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_class_code");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류코드\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:classCode\"/><Cell col=\"1\" text=\"bind:className\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","317","83","159","41",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("입력 및 상세내역");
            obj.set_font("18px/normal \"함초롬바탕 확장\" bold");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","511","92","33","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","554","92","33","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","598","92","33","27",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02_00","520","23","33","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","563","23","33","27",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","607","23","33","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("종료");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","318","132","322","108",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_cellDetail");
            obj.set_autosizebandtype("body");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/></Columns><Rows><Row size=\"34\"/><Row size=\"37\"/><Row size=\"36\"/></Rows><Band id=\"body\"><Cell text=\"점검항목\" background=\"#BFEAFF\"/><Cell col=\"1\" text=\"bind:inspectionItem\" background=\"white\" displaytype=\"text\" edittype=\"none\" combodataset=\"ds_search\" combodisplaynulltext=\"bind:inspectionItem\"/><Cell row=\"1\" text=\"분류코드\" background=\"#BFEAFF\"/><Cell row=\"1\" col=\"1\" text=\"bind:classCode\" background=\"white\" edittype=\"text\" textAlign=\"left\" displaytype=\"text\"/><Cell row=\"2\" text=\"분류명\" background=\"#BFEAFF\"/><Cell row=\"2\" col=\"1\" text=\"bind:className\" background=\"white\" textAlign=\"left\" displaytype=\"text\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","396","136","224","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_search");
            obj.set_codecolumn("inspectionId");
            obj.set_datacolumn("inspectionItem");
            obj.set_opacity("0%");
            obj.set_readonly("true");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",650,580,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PopUp.xfdl", function() {
        // 페이지 load 시 불러 올 데이터들 -----------
        //####################################################################
        //####################################################################
        //####################################################################
        var svcId="inspect";
        var svcUrl="svc::selectInspectionList.do";
        var inData = "";
        var outData = "ds_search=inspectionList";
        var strArg = "";
        var callBackFnc = "fnCallback";
        var isAsync = true;

        this.transaction(svcId,
        				 svcUrl,
        				inData,
        				outData,
        				strArg,
        				callBackFnc,
        				isAsync);

        this.ds_inspection.setColumn(0, "inspectionId", "1");

        var strSvcId = "classSearch"; // id값 의미가 크게x
        var strSvcUrl = "svc::selectMainList.do"; // controller에 매핑되는 값
        var inData = "inputInspection=ds_inspection" //
        var outData = "ds_class_code=output1";
        var strArg = "";
        var callBackFnc = "fnCallback";
        var isAsync = true;

        this.transaction(strSvcId,
        				 strSvcUrl,
        				inData,
        				outData,
        				strArg,
        				callBackFnc,
        				isAsync);
        // ####################################
        // ####################################
        // ####################################

        this.fnSearch = function (){
        	// 검색 조건
        	this.ds_inspection.setColumn(0, "inspectionId", this.Combo00.value);

        	var strSvcId = "classSearch"; // id값 의미가 크게x
        	var strSvcUrl = "svc::selectMainList.do"; // controller에 매핑되는 값
        	var inData = "inputInspection=ds_inspection" //
        	var outData = "ds_class_code=output1";
        	var strArg = "";
        	var callBackFnc = "fnCallback";
        	var isAsync = true;


        	this.transaction(strSvcId,
        					 strSvcUrl,
        					inData,
        					outData,
        					strArg,
        					callBackFnc,
        					isAsync);
        };

        // 아이템 바뀌면..
        this.Combo00_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        	this.fnViewComboBox();
        };

        // 셀 클릭 시 분류코드 디테일
        this.Grid00_oncellclick = function(obj,e)
        {
        	this.fnSaveEG(obj, e);
        	this.fnClassCodeDetail(obj, e);
        	this.fnChangeReadOnly(this.Grid01, e);
        	this.fnViewComboBox();
        };

        // 분류코드 디테일
        this.fnClassCodeDetail = function(obj, e){
        	// ds_cellClickSearch 데이터셋에 classCode라는 이름으로 getColumn에 해당하는 정보를 셋팅해준다.
        	this.ds_cellClickSearch.setColumn(0, "classCode", obj.getBindDataset().getColumn(e.row,"classCode"));

        	var strSvcId = "cellDetail";
        	var strSvcUrl = "svc::popupCellClick.do";
        	var inData = "detail=ds_cellClickSearch" //
        	var outData = "ds_cellDetail=result";
        	var strArg = "";
        	var callBackFnc = "fnCallback";
        	var isAsync = true;
        	this.transaction(strSvcId,
        					 strSvcUrl,
        					inData,
        					outData,
        					strArg,
        					callBackFnc,
        					isAsync);
        }

        var saveMode = "newInput";

        // 입력버튼 눌렀을 시
        this.Button00_02_onclick = function(obj,e)
        {

        	if(saveMode == "modify"){
        		alert("수정 중에는 입력할 수 없습니다.");
        		return false;
        	}
        	this.Combo01.set_opacity(1.0);
        	this.Combo01.set_readonly(false);
        	this.fnChangeInputType(this.Grid01, e);
        	var svcId="inspect";
        	var svcUrl="svc::selectInspectionList.do";
        	var inData = "";
        	var outData = "ds_search=inspectionList";
        	var strArg = "";
        	var callBackFnc = "fnCallback";
        	var isAsync = true;

        	this.transaction(svcId,
        					 svcUrl,
        					inData,
        					outData,
        					strArg,
        					callBackFnc,
        					isAsync);
        };

        this.fnViewComboBox = function(){
        	this.Combo01.set_opacity(0.0);
        	this.Combo01.set_readonly(true);
        }

        // 입력버튼 함수
        this.fnChangeInputType = function(grid, e){
        	grid.setCellProperty("body", 1, "displaytype", "combocontrol");
        	grid.setCellProperty("body", 1, "edittype", "combo");
        	grid.setCellProperty("body", 3, "displaytype", "text");
        	grid.setCellProperty("body", 3, "edittype", "text");
        	grid.setCellProperty("body", 5, "displaytype", "text");
        	grid.setCellProperty("body", 5, "edittype", "text");
        	this.Grid01.setCellProperty("body", 0, "background", "#e9ec69");
        	this.Grid01.setCellProperty("body", 2, "background", "#e9ec69");
        	this.Grid01.setCellProperty("body", 4, "background", "#e9ec69");
        	saveMode = "newInput";
        }

        this.fnChangeReadOnly = function(grid, e){
        	grid.setCellProperty("body", 1, "displaytype", "normal");
        	grid.setCellProperty("body", 1, "edittype", "none");
        	grid.setCellProperty("body", 3, "displaytype", "normal");
        	grid.setCellProperty("body", 3, "edittype", "none");
        	grid.setCellProperty("body", 5, "displaytype", "normal");
        	grid.setCellProperty("body", 5, "edittype", "none");
        	this.Grid01.setCellProperty("body", 0, "background", "#BFEAFF");
        	this.Grid01.setCellProperty("body", 2, "background", "#BFEAFF");
        	this.Grid01.setCellProperty("body", 4, "background", "#BFEAFF");
        	saveMode = "noSave";
        	this.fnViewComboBox();
        }

        //저장버튼
        this.Button00_00_00_00_onclick = function(obj,e)
        {
        	this.fnPopupSave();
        	this.fnChangeReadOnly(this.Grid01);
        	this.fnViewComboBox();
        	this.fnReSearch();
        };

        var insItem = "";

        this.fnPopupSave = function () {
        	if(saveMode == "noSave"){
        		alert("입력 및 수정 버튼을 먼저 눌러주세요");
        		return false;
        	}
        	else if(saveMode == "newInput")
        	{
        	//신규입력
        		var val = String(this.Grid01.getBindDataset().getColumn(0, "classCode"));
        		var regex = /[0-9]/g;

        		if(regex.test(val) == false){
        			alert("숫자만 입력가능합니다.");
        			return false;
        		}
        		if(val.length != 8){
        			alert("분류코드를 8개의 숫자로 넣어주세요");
        			return false;
        		}
        		this.ds_trsf.setColumn(0, "mode", "1");
        		this.ds_trsf.setColumn(0, "inspectionItem", this.Combo01.text);
        		insItem = this.Combo01.value;
        	}
        	else if(saveMode == "modify")
        	{	//수정
        		this.ds_trsf.setColumn(0, "mode", "2");
        		this.ds_trsf.setColumn(0, "inspectionItem", this.Grid01.getBindDataset().getColumn(0,"inspectionItem"));
        	}

        	// 공통실행부분
        	this.ds_trsf.setColumn(0, "classCode", this.Grid01.getBindDataset().getColumn(0,"classCode"));
        	this.ds_trsf.setColumn(0, "className", this.Grid01.getBindDataset().getColumn(0,"className"));

        	var strSvcId = "cellDetail";
        	var strSvcUrl = "svc::popupSave.do";
        	var inData = "input=ds_trsf" //
        	var outData = "alerts=msg";
        	var strArg = "";
        	var callBackFnc = "fnCallback";
        	var isAsync = false;

        	this.transaction(strSvcId,
        					 strSvcUrl,
        					inData,
        					outData,
        					strArg,
        					callBackFnc,
        					isAsync);

        	if(this.alerts.getColumn(0,"msg") != null){
        		alert(this.alerts.getColumn(0,"msg"));
        		this.alerts.setColumn(0, "msg", null);
        	}else{
        		alert("저장되었습니다.");
        		this.alerts.setColumn(0, "msg", null);

        	}
        }

        // 수정 버튼
        this.Button00_00_00_onclick = function(obj,e)
        {
        	if(saveMode == "newInput"){
        		alert("입력 중에는 수정할 수 없습니다.");
        		return false;
        	}
        	this.Grid01.setCellProperty("body", 5, "displaytype", "text");
        	this.Grid01.setCellProperty("body", 5, "edittype", "text");
        	this.Grid01.setCellProperty("body", 4, "background", "#e9ec69");
        	saveMode = "modify";
        };

        // 취소버튼
        this.Button00_01_00_onclick = function(obj,e)
        {
        	this.fnClassCodeDetail(this.Grid00, e);
        	this.fnChangeReadOnly(this.Grid01, e);
        	saveMode = "noSave";
        };

        // 삭제버튼
        this.Button00_02_00_onclick = function(obj,e)
        {
        	var strSvcId = "cellDetail";
        	var strSvcUrl = "svc::deleteClassCode.do";
        	var inData = "delete=ds_cellClickSearch" //
        	var outData = "";
        	var strArg = "";
        	var callBackFnc = "fnCallback";
        	var isAsync = false;
        	this.transaction(strSvcId,
        					 strSvcUrl,
        					inData,
        					outData,
        					strArg,
        					callBackFnc,
        					isAsync);
        };

        this.fnSaveEG = function(obj, e){
        	this.ds_cellClickSearch.setColumn(0, "classCode", obj.getBindDataset().getColumn(e.row,"classCode"));
        }

        this.Button00_01_00_00_onclick = function(obj,e)
        {
        	this.close();
        };

        this.fnReSearch = function (){
        	// 검색 조건
        	this.ds_inspection.setColumn(0, "inspectionId", insItem);

        	var strSvcId = "classSearch"; // id값 의미가 크게x
        	var strSvcUrl = "svc::selectMainList.do"; // controller에 매핑되는 값
        	var inData = "inputInspection=ds_inspection" //
        	var outData = "ds_class_code=output1";
        	var strArg = "";
        	var callBackFnc = "fnCallback";
        	var isAsync = true;


        	this.transaction(strSvcId,
        					 strSvcUrl,
        					inData,
        					outData,
        					strArg,
        					callBackFnc,
        					isAsync);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button00_02.addEventHandler("onclick",this.Button00_02_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
            this.Button00_01_00.addEventHandler("onclick",this.Button00_01_00_onclick,this);
            this.Button00_02_00.addEventHandler("onclick",this.Button00_02_00_onclick,this);
            this.Button00_00_00_00.addEventHandler("onclick",this.Button00_00_00_00_onclick,this);
            this.Button00_01_00_00.addEventHandler("onclick",this.Button00_01_00_00_onclick,this);
            this.Combo01.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
        };
        this.loadIncludeScript("PopUp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
