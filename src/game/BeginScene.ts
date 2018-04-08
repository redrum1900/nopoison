class BeginScene extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		// this.addEventListener(egret.Event.ADDED_TO_STAGE,this.initView,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.initView();
	}

	static beginScene:BeginScene;

	public btn_story:eui.Button;
	public btn_rush:eui.Button;

	private initView(){
        BeginScene.beginScene = new BeginScene();

		// this.btn_story.touchEnabled = true;
		this.btn_story.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this);
       
	}


	private onButtonClick(e: egret.TouchEvent){
        SceneController.startGame();
    }

	
}