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
var PlayerObject = (function (_super) {
    __extends(PlayerObject, _super);
    function PlayerObject() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    PlayerObject.prototype.init = function () {
        this.role = GameUtil.createBitmapByName("player_png");
        this.addChildAt(this.role, 0);
    };
    return PlayerObject;
}(RoleObject));
__reflect(PlayerObject.prototype, "PlayerObject");
//# sourceMappingURL=PlayerObject.js.map