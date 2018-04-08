class LevelDataItem{
	public answer:string;
	public img:string;
	public word:string;
	public tip:string;
	public content:string;
}
/**
 * 关卡数据管理类
 * 读取json文件中的数据
 * 获取某一关的数据
 * 
 */
class LevelData {

	private static shared:LevelData;
	public static getInstance(){
		if(!LevelData.shared){
			LevelData.shared = new LevelData();
		}

		return LevelData.shared;
	}

	// 创建一个数组，用来保存所有的关卡数据
	private items:LevelDataItem[] = [];
	//总关卡数
	public  totalLevels:number;

	public constructor() {
		this.items = RES.getRes("levels_json");
		this.totalLevels = this.items.length;
	}
	
	public getLevelData(level:number):LevelDataItem{
		return this.items[level];
	}

	//获取游戏进度
	public get Milestone(){
		
		let milestone = egret.localStorage.getItem("stage");
		if(milestone == null || milestone == ""){
			return 1;
		}else{
			return parseInt(milestone);
		}

	}
	//设置游戏进度
	public set Milestone(level:number){
		console.log("set stage"+level);
		egret.localStorage.setItem("stage",level.toString());
	}	
}