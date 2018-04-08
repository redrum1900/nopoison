class LevelScene extends eui.Component implements  eui.UIComponent {
	public sc_level:eui.Scroller;
	public gp_level:eui.Group;

	// 声明数组 存放关卡按钮
	private levelIcons:LevelIcon[] = []; 
	// 当前选择的关卡
	private sel_levle:number;

	private static  shared:LevelScene;
	public static getInstance(){
		if( !LevelScene.shared ){
			LevelScene.shared = new LevelScene();
		}
		return LevelScene.shared;
	}

	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}

	private init(){
		// this.sc_level.scrollPolicyH = eui.ScrollPolicy.OFF;
		// this.sc_level.scrollPolicyV = eui.ScrollPolicy.ON;

		

		let group:eui.Group = new eui.Group();
		this.gp_level.addChild(group);

		let col = 10;
		let row = 20;
		let icon_width = 128;
		let icon_height = 128;

		group.width = this.width;
		// 每个icon的高度 * 总关卡数
		// group.height = icon_height * LevelData.getInstance().totalLevels;
		group.height = 3240;

		// 填充背景图
			let img_bg:eui.Image = new eui.Image("map_png");
			img_bg.height=3240;
			img_bg.y = 0 ;
			this.gp_level.addChildAt( img_bg,0);

		//设置关卡icon
		for( let i:number = 0; i < LevelData.getInstance().totalLevels; i++ ){
			let icon:LevelIcon = new LevelIcon();
			group.addChild(icon);
			icon.Level = i + 1;
			icon.x = Math.sin(icon_height*i/2/180*Math.PI)*200 + group.width/2;
			icon.y = group.height -  icon_height * i - icon.height - 200;
			//给按钮添加点击事件回调
			// icon.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapIcon,this);
			//设置关卡按钮的状态 是否可以点击
			// icon.enabled = i < milestrone;
			// 把关卡按钮存入数组
			this.levelIcons.push( icon );
		}

		//scroller滚动到底部
		this.gp_level.scrollV = 2160;
	}
	
}