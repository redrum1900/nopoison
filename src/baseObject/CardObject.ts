class CardObject extends egret.DisplayObjectContainer{
    public constructor() {
        super();
        this.init();
    }

    public _card:egret.Bitmap;   //人物图片

	get width(){
		return this._card.width;
	}
	get height(){
		return this._card.height;
	}

    get x(){
		return this._card.x;
	}

    get y(){
		return this._card.y;
	}

    public init(){

       
    }
}