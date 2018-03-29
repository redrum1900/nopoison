class PlayerObject extends RoleObject{
    public constructor() {
		super();
		this.init();
	}

    public init(){
        this.role = GameUtil.createBitmapByName("player_png");
        this.addChildAt( this.role, 0 );
    }

}