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
var LevelScene = (function (_super) {
    __extends(LevelScene, _super);
    function LevelScene() {
        var _this = _super.call(this) || this;
        // 声明数组 存放关卡按钮
        _this.levelIcons = [];
        return _this;
    }
    LevelScene.getInstance = function () {
        if (!LevelScene.shared) {
            LevelScene.shared = new LevelScene();
        }
        return LevelScene.shared;
    };
    LevelScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LevelScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    LevelScene.prototype.init = function () {
        // this.sc_level.scrollPolicyH = eui.ScrollPolicy.OFF;
        // this.sc_level.scrollPolicyV = eui.ScrollPolicy.ON;
        var group = new eui.Group();
        this.gp_level.addChild(group);
        var col = 10;
        var row = 20;
        var icon_width = 128;
        var icon_height = 128;
        group.width = this.width;
        // 每个icon的高度 * 总关卡数
        // group.height = icon_height * LevelData.getInstance().totalLevels;
        group.height = 3240;
        // 填充背景图
        var img_bg = new eui.Image("map_png");
        img_bg.height = 3240;
        img_bg.y = 0;
        this.gp_level.addChildAt(img_bg, 0);
        //设置关卡icon
        for (var i = 0; i < LevelData.getInstance().totalLevels; i++) {
            var icon = new LevelIcon();
            group.addChild(icon);
            icon.Level = i + 1;
            icon.x = Math.sin(icon_height * i / 2 / 180 * Math.PI) * 200 + group.width / 2;
            icon.y = group.height - icon_height * i - icon.height - 200;
            //给按钮添加点击事件回调
            // icon.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapIcon,this);
            //设置关卡按钮的状态 是否可以点击
            // icon.enabled = i < milestrone;
            // 把关卡按钮存入数组
            this.levelIcons.push(icon);
        }
        //scroller滚动到底部
        this.gp_level.scrollV = 2160;
    };
    return LevelScene;
}(eui.Component));
__reflect(LevelScene.prototype, "LevelScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=LevelScene.js.map