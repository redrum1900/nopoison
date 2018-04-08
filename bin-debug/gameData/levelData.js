var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LevelDataItem = (function () {
    function LevelDataItem() {
    }
    return LevelDataItem;
}());
__reflect(LevelDataItem.prototype, "LevelDataItem");
/**
 * 关卡数据管理类
 * 读取json文件中的数据
 * 获取某一关的数据
 *
 */
var LevelData = (function () {
    function LevelData() {
        // 创建一个数组，用来保存所有的关卡数据
        this.items = [];
        this.items = RES.getRes("levels_json");
        this.totalLevels = this.items.length;
    }
    LevelData.getInstance = function () {
        if (!LevelData.shared) {
            LevelData.shared = new LevelData();
        }
        return LevelData.shared;
    };
    LevelData.prototype.getLevelData = function (level) {
        return this.items[level];
    };
    Object.defineProperty(LevelData.prototype, "Milestone", {
        //获取游戏进度
        get: function () {
            var milestone = egret.localStorage.getItem("stage");
            if (milestone == null || milestone == "") {
                return 1;
            }
            else {
                return parseInt(milestone);
            }
        },
        //设置游戏进度
        set: function (level) {
            console.log("set stage" + level);
            egret.localStorage.setItem("stage", level.toString());
        },
        enumerable: true,
        configurable: true
    });
    return LevelData;
}());
__reflect(LevelData.prototype, "LevelData");
//# sourceMappingURL=levelData.js.map