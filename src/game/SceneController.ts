class SceneController {
    private _stage:egret.DisplayObjectContainer;

    private startScene:StartScene;
	private gameScene:GameScene;
	private beginScene:BeginScene;
	private levelScene:LevelScene;

    public constructor() {
		this.startScene = new StartScene();
		this.gameScene = new GameScene();
		this.beginScene = new BeginScene();
		this.levelScene = new LevelScene();
		// this.overScene = new OverScene();
	}
	static sceneController:SceneController;

    static get instance(){
        if(!this.sceneController){
            this.sceneController = new SceneController();
        }
        return this.sceneController;
    }

    public setStage(s:egret.DisplayObjectContainer){
        this._stage = s;
    }

    /**
	 * 游戏初始化（进入开始游戏场景）
	 */
	static initGame(){
		let stage:egret.DisplayObjectContainer = this.instance._stage;
		if( this.instance.gameScene.parent){
			stage.removeChild( this.instance.gameScene );
			this.instance.gameScene = new GameScene();
		}
		// if( this.instance.overScene.parent){
		// 	stage.removeChild(this.instance.overScene);
		// 	this.instance.overScene = new OverScene();
		// }
		// //加入开始场景
		stage.addChild( this.instance.beginScene );
	}

	static startGame(){
		let stage:egret.DisplayObjectContainer = this.instance._stage;
		stage.removeChild(this.instance.beginScene)
		stage.addChild(this.instance.levelScene);
		// stage.addChild(this.instance.gameScene)
	}
}
