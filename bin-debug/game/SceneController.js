var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneController = (function () {
    function SceneController() {
        this.startScene = new StartScene();
        this.gameScene = new GameScene();
        this.beginScene = new BeginScene();
        this.levelScene = new LevelScene();
        // this.overScene = new OverScene();
    }
    Object.defineProperty(SceneController, "instance", {
        get: function () {
            if (!this.sceneController) {
                this.sceneController = new SceneController();
            }
            return this.sceneController;
        },
        enumerable: true,
        configurable: true
    });
    SceneController.prototype.setStage = function (s) {
        this._stage = s;
    };
    /**
     * 游戏初始化（进入开始游戏场景）
     */
    SceneController.initGame = function () {
        var stage = this.instance._stage;
        if (this.instance.gameScene.parent) {
            stage.removeChild(this.instance.gameScene);
            this.instance.gameScene = new GameScene();
        }
        // if( this.instance.overScene.parent){
        // 	stage.removeChild(this.instance.overScene);
        // 	this.instance.overScene = new OverScene();
        // }
        // //加入开始场景
        stage.addChild(this.instance.beginScene);
    };
    SceneController.startGame = function () {
        var stage = this.instance._stage;
        stage.removeChild(this.instance.beginScene);
        stage.addChild(this.instance.levelScene);
        // stage.addChild(this.instance.gameScene)
    };
    return SceneController;
}());
__reflect(SceneController.prototype, "SceneController");
//# sourceMappingURL=SceneController.js.map