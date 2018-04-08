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
var BeginScene = (function (_super) {
    __extends(BeginScene, _super);
    function BeginScene() {
        return _super.call(this) || this;
        // this.addEventListener(egret.Event.ADDED_TO_STAGE,this.initView,this);
    }
    BeginScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    BeginScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.initView();
    };
    BeginScene.prototype.initView = function () {
        BeginScene.beginScene = new BeginScene();
        // this.btn_story.touchEnabled = true;
        this.btn_story.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    BeginScene.prototype.onButtonClick = function (e) {
        SceneController.startGame();
    };
    return BeginScene;
}(eui.Component));
__reflect(BeginScene.prototype, "BeginScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=BeginScene.js.map