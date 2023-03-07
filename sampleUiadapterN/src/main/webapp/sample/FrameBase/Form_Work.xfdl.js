(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("loginPopup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1080);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_loginData", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_loginInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","900","400","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("LOGIN");
            obj.set_font("24pt \"Arial\",\"휴먼둥근헤드라인\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","768","474","373","64",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","768","555","373","64",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","710","480","33","55",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("ID");
            obj.set_font("28px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","705","555","43","55",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("PW");
            obj.set_font("28px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","768","647","373","58",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("LOGIN");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,1080,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {



        this.Button00_onclick = function(obj,e)
        {
        	this.fnLogin();
        	if(this.ds_loginInfo.getColumn(0, "id") != null && this.ds_loginInfo.getColumn(0, "pw") != null){
        		var logedChk = this.ds_loginInfo.getColumn(0,"id");
        		this.go("FrameBase::loginPopup.xfdl");
        		//window.sessionStorage.setItem("ID", logedChk);

        // 		var nW = 500;
        // 		var nH = 400;
        //
        // 		var objApp = nexacro.getApplication();
        // 		var nLeft = (objApp.mainframe.width  / 2) - Math.round(nW / 2);
        // 		var nTop  = (objApp.mainframe.height / 2) - Math.round(nH / 2) ;
        // 		nLeft = system.clientToScreenX(this, nLeft);
        // 		nTop  = system.clientToScreenY(this, nTop);
        //
        // 		var objParam = "";
        // 		var sOpenStyle = "dragmovetype=all"
        // 					 + " resizable=true"
        // 					 + " titletext=Modeless"
        // 					 + " showtitlebar=true"
        // 					 + " showstatusbar=false";
        //
        //
        // 				nexacro.open("PopUp"
        // 			   , "svc::/sample/FrameBase/loginPopup.xfdl"
        // 			   , this.getOwnerFrame()
        // 			   , objParam
        // 			   , sOpenStyle
        // 			   , nLeft
        // 			   , nTop
        // 			   , nW
        // 			   , nH , this);


        	}else{
        		alert("로그인 실패");
        	}


        };

        this.fnLogin = function (){
        	this.ds_loginData.setColumn(0, "id", this.Edit00.value);
        	this.ds_loginData.setColumn(0, "pw", this.Edit00_00.value);

        	var strSvcId = "classSearch"; // id값 의미가 크게x
        	var strSvcUrl = "svc::login.do"; // controller에 매핑되는 값
        	var inData = "loginInput=ds_loginData" //
        	var outData = "ds_loginInfo=loginInfo";
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
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
