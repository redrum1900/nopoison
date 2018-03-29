class RoleObject extends egret.DisplayObjectContainer{
    public constructor() {
        super();
        this.init();
    }

    public role:egret.Bitmap;   //人物图片
    public death_img:egret.Bitmap;       //死亡

    private damage_common_img:egret.Bitmap;     //普通伤害
    private damage_thump_img:egret.Bitmap;      //重击伤害
    private damage_serious_img:egret.Bitmap;    //重伤效果
	private damage_weak_img:egret.Bitmap;       //虚弱效果

	get width(){
		return this.role.width;
	}
	get height(){
		return this.role.height;
	}

    public init(){

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
    }
}