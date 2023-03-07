(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"inspectionId\" type=\"STRING\" size=\"256\"/><Column id=\"inspectionItem\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_removeAccount", this);
            obj._setContents("<ColumnInfo><Column id=\"accountCode\" type=\"STRING\" size=\"256\"/><Column id=\"ac_product\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_account_code", this);
            obj._setContents("<ColumnInfo><Column id=\"계정코드\" type=\"STRING\" size=\"256\"/><Column id=\"계정코드명\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"ac_product\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_account", this);
            obj._setContents("<ColumnInfo><Column id=\"계정코드\" type=\"STRING\" size=\"256\"/><Column id=\"계정코드명\" type=\"STRING\" size=\"256\"/><Column id=\"상품분류\" type=\"STRING\" size=\"256\"/><Column id=\"상품분류명\" type=\"STRING\" size=\"256\"/><Column id=\"자산구분\" type=\"STRING\" size=\"256\"/><Column id=\"자산구분명\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popup_div", this);
            obj._setContents("<ColumnInfo><Column id=\"분류코드\" type=\"STRING\" size=\"256\"/><Column id=\"분류코드명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_class_code", this);
            obj._setContents("<ColumnInfo><Column id=\"분류코드\" type=\"STRING\" size=\"256\"/><Column id=\"코드명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_asset_list", this);
            obj._setContents("<ColumnInfo><Column id=\"assetdivision\" type=\"STRING\" size=\"256\"/><Column id=\"assetname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspection", this);
            obj._setContents("<ColumnInfo><Column id=\"inspectionId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_commonSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"cellNum\" type=\"STRING\" size=\"256\"/><Column id=\"inspectionId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_assetSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"assetDivision\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_accountList", this);
            obj._setContents("<ColumnInfo><Column id=\"dataList\" type=\"STRING\" size=\"256\"/><Column id=\"ac_product\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cellClickSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"classCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveVal", this);
            obj._setContents("<ColumnInfo><Column id=\"val\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("mainSearch","1106","14","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_background("#f7e600");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_00","1162","14","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_background("#f7e600");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_01","1219","14","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("종료");
            obj.set_background("#92b8b1");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","12","303","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("869002 점검항목별 분류코드 관리");
            obj.set_font("11pt/normal \"휴먼둥근헤드라인\",\"함초롬바탕 확장\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","60","217","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("점검항목별 분류코드 관리");
            obj.set_font("12px/normal \"함초롬바탕 확장\" bold");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","11","91","1255","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","130","94","530","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_search");
            obj.set_codecolumn("inspectionId");
            obj.set_datacolumn("inspectionItem");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","11","92","109","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("  한도 점검항목");
            obj.set_background("#d3d3d3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","11","130","217","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("점검항목별 분류코드");
            obj.set_font("12px/normal \"함초롬바탕 확장\" bold");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","11","162","289","459",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_class_code");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류코드\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:classCode\" maskedittype=\"string\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:className\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("reg_div_code","220","134","80","16",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("분류코드등록");
            obj.set_background("#92b8b1");
            obj.set_color("#ffffff");
            obj.set_borderRadius("2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","323","130","217","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("분류코드별 계정코드");
            obj.set_font("12px/normal \"함초롬바탕 확장\" bold");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","-203","164",null,"25","1465",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","680","134","217","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("계정코드");
            obj.set_font("12px/normal \"함초롬바탕 확장\" bold");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","680","161","583","31",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","680","162","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("  자산구분");
            obj.set_background("#90d5eb");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","681","246","584","374",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_account");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"113\"/><Column size=\"80\"/><Column size=\"103\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"계정코드\"/><Cell col=\"2\" text=\"계정코드명\"/><Cell col=\"3\" text=\"상품분류\"/><Cell col=\"4\" text=\"상품분류명\"/><Cell col=\"5\" text=\"자산구분\"/><Cell col=\"6\" text=\"자산구분명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"bind:accountCode\"/><Cell col=\"2\" text=\"bind:accountName\"/><Cell col=\"3\" text=\"bind:ac_product\"/><Cell col=\"4\" text=\"bind:ac_productName\"/><Cell col=\"5\" text=\"bind:ac_assetDivision\"/><Cell col=\"6\" text=\"bind:assetName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_01_00","1217","210","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("검색");
            obj.set_background("#92b8b1");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","643","370","35","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text(" >>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","643","413","35","27",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text(" <<");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","783","164","394","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_asset_list");
            obj.set_codecolumn("assetDivision");
            obj.set_datacolumn("assetName");
            obj.set_text("");
            obj.set_value("ALL");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","320","160","320","460",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_account_code");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:chk\"/><Cell col=\"1\" text=\"계정코드\"/><Cell col=\"2\" text=\"계정코드명\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:accountCode\"/><Cell col=\"2\" text=\"bind:accountName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("loginPopup.xfdl", function() {
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

         	var svcId="asset";
         	var svcUrl="svc::selectInspectionList.do";
         	var inData = "";
         	var outData = "ds_asset_list=assetList";
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

        this.Grid03.setFormatRowProperty(3, "size", 0);

        //처리콜백 함수
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
          // 에러 시 화면 처리 내역
          if(errorCode != 0)
          {
            this.alert(errorCode+"\n"+errorMsg);
            return;
          }

          switch(svcID)
          {
            case "search":
              if(this.ds_list.rowcount < 1){
                this.alert("조회된 결과가 없습니다.");
              }

              break;

            case "saveMove":
              this.alert("저장 되었습니다.");
              break;

        	 case "removeAccount":
        		this.alert("삭제되었습니다");
        		break;

        	 case "cellDelete":
        		this.fnSearch();
        		break;
          }
        };

        // 계정코드 검색 버튼
        this.Button04_01_onclick = function(obj,e)
        {
        	this.fnAccountSearch();
        };

        // 계정코드 검색
        this.fnAccountSearch = function() {
        	// 검색 조건
        	this.ds_assetSearch.setColumn(0, "assetDivision", this.Combo00.value);

        	var strSvcId = "accountForAsset"; // id값 의미가 크게x
        	var strSvcUrl = "svc::selectAccountForAsset.do"; // controller에 매핑되는 값
        	var inData = "inputAsset=ds_assetSearch" //
        	var outData = "ds_account=resAccountForAssetList";
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

        // 팝업
        this.reg_div_code_onclick = function(obj,e)
        {
        	var nW = 500;
        	var nH = 400;

        	var objApp = nexacro.getApplication();
        	var nLeft = (objApp.mainframe.width  / 2) - Math.round(nW / 2);
        	var nTop  = (objApp.mainframe.height / 2) - Math.round(nH / 2) ;
        	nLeft = system.clientToScreenX(this, nLeft);
        	nTop  = system.clientToScreenY(this, nTop);

        var objParam = "";
        // {param1:this.edt_param1.value
        //               , param2:this.edt_param2.value
                      /*, param3:this.ds_parent};*/

        var sOpenStyle = "dragmovetype=all"
                     + " resizable=true"
                     + " titletext=Modeless"
                     + " showtitlebar=true"
                     + " showstatusbar=false";


        			nexacro.open("PopUpuouououo"
                   , "svc::/sample/FrameBase/PopUp.xfdl"
                   , this.getOwnerFrame()
                   , objParam
                   , sOpenStyle
                   , nLeft
                   , nTop
                   , nW
                   , nH , this);

        };


        // 메인 검색버튼
        var accountList = []
        this.mainSearch_onclick = function(obj,e)
        {
        	this.fnInspectionList();
        	this.fnSearch();
        	this.fnReadAssetList();
        	this.fnReadAccountList();
        };

        this.fnInspectionList = function() {


        	var svcId="inspect1";
        	var svcUrl="svc::selectMainList.do";
        	var inData = "inputInspection=ds_inspection" //
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

        this.fnReadAccountList = function() {
        	var svcId="account";
        	var svcUrl="svc::selectMainList.do";
        	var inData = "inputInspection=ds_inspection" //
        	var outData = "ds_account=accountList";
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

        this.fnSearch = function (){
        	// 검색 조건
        	this.ds_inspection.setColumn(0, "inspectionId", this.Combo01.value);

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

         this.fnReadAssetList = function (){
         	var svcId="asset";
         	var svcUrl="svc::selectMainList.do";
         	var inData = "inputInspection=ds_inspection" //
         	var outData = "ds_asset_list=assetList";
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
         }


        // 분류코드 셀 클릭시
        this.Grid01onCellClick = function(obj,e)
        { //e.row
        	// 검색 조건
        	this.ds_commonSearch.setColumn(0, "cellNum", e.row+1);
        	this.ds_commonSearch.setColumn(0, "inspectionId", this.Combo01.value);


        	var svcId="cellClickEvent";
         	var svcUrl="svc::cellClick.do";
         	var inData = "inputCellNum=ds_commonSearch" //
         	var outData = "ds_account_code=cellResult";
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

        	this.ds_cellClickSearch.setColumn(0, "classCode", obj.getBindDataset().getColumn(e.row,"classCode"));

        };
        // 그리드 전체체크/ 전체해제
        this.Grid00_onheadclick = function(obj,e)
        {
        	if(e.cell==0)
        	{
        		//그리드 전체체크/체크해제 실행 함수 호출
        		this.gfnSetGridCheckAll(obj, e);
        	}
        };

        this.gfnSetGridCheckAll = function (obj, e)
        {
        	var sChk;
        	var sVal;
        	var objDs;
        	var nCellIdx  = e.cell;
        	var sColumnId;

        	//그리드에 연결된 데이터셋 가져오기
        	objDs  = obj.getBindDataset();

        	//데이터셋에 데이터가 없을 경우 리턴
        	if(objDs.rowcount < 1) return;

        	//전체 체크/체크해제할 컬럼명 구하기
        	sColumnId = obj.getCellProperty("body", nCellIdx, "text");
        	sColumnId = sColumnId.toString().replace("bind:", "");

        	//Head의 현재 Check설정 값 가져오기
        	sVal = obj.getCellProperty("head", nCellIdx, "text");

        	//현재 체크상태일 경우
        	if (sVal == "1" )
        	{
        		//Head의 값을 체크해제로 설정
        		obj.setCellProperty("head", nCellIdx, "text", "0");
        		sChk="0";
        	}
        	//현재 체크해제상태일 경우
        	else {
        		//Head의 값을 체크로 설정
        		obj.setCellProperty("head", nCellIdx, "text", "1");
        		sChk="1";
        	}


        	//성능 개선을 위해 이벤트 발생 정지
        	objDs.set_enableevent(false);

        	// Body에 전체 체크/체크해제 상태 적용
        	for(var i=0 ; i< objDs.rowcount ; i++)
        	{
        		objDs.setColumn(i, sColumnId, sChk);
        	}

        	//성능 개선을 위해 이벤트 발생 재실행
        	objDs.set_enableevent(true);
        };


        // 계정코드에서 한 셀을 더블클릭했을 때 checkBox On
        var putDataList = [];
        var productDivList = [];
        var productList = [];
         this.Grid00_oncellclick = function(obj,e)
         {
         	if(obj.getBindDataset().getColumn(e.row,"chk") == "1"){
         		obj.getBindDataset().setColumn(e.row, "chk", "0");
         	}else{
         		obj.getBindDataset().setColumn(e.row, "chk", "1");
         	}
         };

        // 데이터 리스트에 값 추가
        this.fnPutDataList = function (putData){
        	putDataList.push(putData);
        }

        // 상품분류리스트 값 추가
        this.fnPutProudctDivList = function (putData){
        	productDivList.push(putData);
        }

        // 계정 옮기기 버튼
        this.Button00_00_onclick = function(obj,e)
        {
        	this.fnMoveAccount(this.Grid00);
        };

        // 계정 옮기기 함수
        this.fnMoveAccount = function(grid){

        	var bindDS = grid.getBindDataset();
        	putDataList = [];
        	productDivList = [];

        	if(bindDS.rowcount > 1){
        		for(var i=0; i<bindDS.rowcount; i++){
        			if(bindDS.getColumn(i, "chk") == "1"){
        				putDataList.push(i+1);
        				productDivList.push(bindDS.getColumn(i, "ac_product"));
        			}
        		}
        	}

        	if(putDataList.length == 0){
        		alert("계정코드를 선택해주세요");
        		return false;
        	}
        	// 검색 조건
        	this.ds_accountList.setColumn(0, "dataList", putDataList);
        	this.ds_accountList.setColumn(0, "ac_product", productDivList);

        	var svcId="saveMove";
         	var svcUrl="svc::moveAccount.do";
         	var inData = "inputDataList=ds_accountList";
         	var outData = "ds_account_code=moveAccountRes";
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
        }

        // 분류코드별 계정코드 셀 클릭 시
        this.Grid03_oncellClick = function(obj,e)
        {
        	if(obj.getBindDataset().getColumn(e.row,"chk") == "1"){
        		obj.getBindDataset().setColumn(e.row, "chk", "0");
        	}else{
        		obj.getBindDataset().setColumn(e.row, "chk", "1");
        	}

        };

        // 분류코드별 계정코드 셀 전체선택/해제
        this.Grid03_onheadclick = function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e);
        };



        // 버튼으로 분류코드별 계정코드 삭제 버튼
        this.Button00_onclick = function(obj,e)
        {
        	var bindDS = this.Grid03.getBindDataset();
        	accountList = [];
        	productList = [];

        	if(bindDS.rowcount > 1){
        		for(var i=0; i<bindDS.rowcount; i++){
        			if(bindDS.getColumn(i, "chk") == "1"){
        				accountList.push(bindDS.getColumn(i, "accountCode"));
        				productList.push(bindDS.getColumn(i, "ac_product"));
        			}
        		}
        	}

        	if(productList.length == 0){
        		alert("계정코드를 선택해주세요");
        		return false;
        	}
        	// 검색 조건
        	this.ds_removeAccount.setColumn(0, "accountCode", accountList);
        	this.ds_removeAccount.setColumn(0, "ac_product", productList);

        	var svcId="removeAccount";
         	var svcUrl="svc::removeAccount.do";
         	var inData = "inputDataList=ds_removeAccount" //
         	var outData = "ds_account_code=removeAccountRes";
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


        this.Grid03_oncelldblclick = function(obj,e)
        {
        	this.Grid03_oncellClick(obj, e)
        };



        this.Combo01_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        };

        // 메인페이지 삭제버튼
        this.Button04_00_onclick = function(obj,e)
        {
        	if(this.ds_cellClickSearch.getColumn(0, "classCode") != null){
        		var strSvcId = "cellDelete";
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
        		alert("삭제되었습니다");
        	}else{
        		alert("값을 선택해주세요.");
        	}

        };

        this.close = function(obj,e)
        {
        	this.close();
        };

        this.fnSaveVal = function(val){
        	this.ds_saveVal.setColumn(0, "val", val);
        	alert(this.ds_saveVal.getColumn(0, "val"));
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.mainSearch.addEventHandler("onclick",this.mainSearch_onclick,this);
            this.Button04_00.addEventHandler("onclick",this.Button04_00_onclick,this);
            this.Button04_01.addEventHandler("onclick",this.close,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Combo01.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.Static01_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Grid01.addEventHandler("oncellclick",this.Grid01onCellClick,this);
            this.Grid01.addEventHandler("oncellposchanged",this.chagne,this);
            this.reg_div_code.addEventHandler("onclick",this.reg_div_code_onclick,this);
            this.Static01_00_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_00_00_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static04.addEventHandler("onclick",this.Static04_onclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncellclick,this);
            this.Button04_01_00.addEventHandler("onclick",this.Button04_01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Grid03.addEventHandler("onheadclick",this.Grid03_onheadclick,this);
            this.Grid03.addEventHandler("onmousedown",this.Grid03_onmousedown,this);
            this.Grid03.addEventHandler("oncelldblclick",this.Grid03_oncelldblclick,this);
        };
        this.loadIncludeScript("loginPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
