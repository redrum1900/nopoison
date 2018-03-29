var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameSceneObject = (function (_super) {
    __extends(GameSceneObject, _super);
    function GameSceneObject() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    GameSceneObject.prototype.init = function () {
        this.UIContainer = new egret.DisplayObjectContainer();
        this.addChild(this.UIContainer);
        //初始化UI层
        this.initUIContainer();
    };
    GameSceneObject.prototype.initUIContainer = function () {
        //暂停按钮
        var pauseBtn = GameUtil.createBitmapByName("pause_png");
        pauseBtn.touchEnabled = true;
        pauseBtn.x = this.stage.stageWidth - pauseBtn.width - 20;
        pauseBtn.y = 20;
        pauseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPause, this);
        this.UIContainer.addChild(pauseBtn);
    };
    GameSceneObject.prototype.onPause = function (e) {
        e.stopPropagation(); //阻止冒泡
        SceneController.initGame();
        console.log("游戏暂停");
    };
    return GameSceneObject;
}(egret.DisplayObjectContainer));
__reflect(GameSceneObject.prototype, "GameSceneObject");
//# sourceMappingURL=GameSceneObject.js.map