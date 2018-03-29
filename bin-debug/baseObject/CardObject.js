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
var CardObject = (function (_super) {
    __extends(CardObject, _super);
    function CardObject() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Object.defineProperty(CardObject.prototype, "width", {
        get: function () {
            return this._card.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardObject.prototype, "height", {
        get: function () {
            return this._card.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardObject.prototype, "x", {
        get: function () {
            return this._card.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardObject.prototype, "y", {
        get: function () {
            return this._card.y;
        },
        enumerable: true,
        configurable: true
    });
    CardObject.prototype.init = function () {
    };
    return CardObject;
}(egret.DisplayObjectContainer));
__reflect(CardObject.prototype, "CardObject");
//# sourceMappingURL=CardObject.js.map