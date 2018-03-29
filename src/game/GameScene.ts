class GameScene extends GameSceneObject{
    public constructor(){
		super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.initView,this);
	}

    private initView(){
        
    }
}