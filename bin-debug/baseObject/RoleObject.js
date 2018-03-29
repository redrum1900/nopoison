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
var RoleObject = (function (_super) {
    __extends(RoleObject, _super);
    function RoleObject() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Object.defineProperty(RoleObject.prototype, "width", {
        get: function () {
            return this.role.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleObject.prototype, "height", {
        get: function () {
            return this.role.height;
        },
        enumerable: true,
        configurable: true
    });
    RoleObject.prototype.init = function () {
        this.death_img = GameUtil.createBitmapByName("death_png");
        this.death_img.visible = false;
        this.addChild(this.death_img);
        this.damage_common_img = GameUtil.createBitmapByName("damage_common_png");
        this.damage_common_img.visible = false;
        this.addChild(this.damage_common_img);
        this.damage_thump_img = GameUtil.createBitmapByName("damage_thump_png");
        this.damage_thump_img.visible = false;
        this.addChild(this.damage_thump_img);
        this.damage_serious_img = GameUtil.createBitmapByName("damage_serious_png");
        this.damage_serious_img.visible = false;
        this.addChild(this.damage_serious_img);
        this.damage_weak_img = GameUtil.createBitmapByName("damage_weak_png");
        this.damage_weak_img.visible = false;
        this.addChild(this.damage_weak_img);
    };
    return RoleObject;
}(egret.DisplayObjectContainer));
__reflect(RoleObject.prototype, "RoleObject");
//# sourceMappingURL=RoleObject.js.map