
interface Levels {
	counter: number
	
	start(): void;
}

let Levels = function (this: any)
{
	this.counter = 0;
} as any as {
	new (): Levels
};

Levels.prototype.start = function ()
{
	console.log(this.counter)
};

export {
	Levels
};