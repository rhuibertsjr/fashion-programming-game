
export class Sprite
{
	private readonly _pos: { x: number; y: number; };
	
	constructor(pos: { x: number, y: number })
	{
		this._pos = pos;
		
	}
	
	public buildSprite() {
		return this._pos;
		
	}
}

export class Circle extends Sprite {
	
	constructor(config: { x: number; y: number; })
	{
		super(config);
	}
	
}