class GameSceneObject extends egret.DisplayObjectContainer{
    public constructor(){
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
	}

    private UIContainer:egret.DisplayObjectContainer;//UI层

    private init(){
        this.UIContainer = new egret.DisplayObjectContainer();

        this.addChild( this.UIContainer );

        //初始化UI层
		this.initUIContainer();
    }

    private initUIContainer(){
         //暂停按钮
		let pauseBtn:egret.Bitmap = GameUtil.createBitmapByName("pause_png");
		pauseBtn.touchEnabled = true;
		pauseBtn.x = this.stage.stageWidth - pauseBtn.width - 20;
		pauseBtn.y = 20;
		pauseBtn.addEventListener( egret.TouchEvent.TOUCH_TAP,this.onPause,this);
		this.UIContainer.addChild(pauseBtn);
    }

    private onPause(e:egret.TouchEvent){
		e.stopPropagation();//阻止冒泡
		SceneController.initGame();
		console.log("游戏暂停");
	}
   
}