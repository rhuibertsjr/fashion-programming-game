
const Character = function (this: any)
{
	
	if (localStorage.getItem('character'))
	{
		this.currentCharacter = localStorage.getItem('character');
	}
	else
	{
		this.currentCharacter = 0;
	}
	
} as any as {
	new (): Character;
};

Character.prototype.init = function (): void
{
	if (localStorage.getItem('character')) return;
	localStorage.setItem('character', this.currentCharacter);
};

Character.prototype.getCharacter = function (): number
{
	let currentCharacter: string | null = localStorage.getItem('character');
	
	if (currentCharacter) return parseInt(currentCharacter);
	
	return 0;
};

Character.prototype.nextCharacter = function (): void
{
	console.log(this);
	if (this.currentCharacter >= 3) return;
	
	this.currentCharacter++;
	localStorage.setItem('character', this.currentCharacter);
};

Character.prototype.previousCharacter = function (): void
{
	if (this.currentCharacter <= 0) return;
	
	this.currentCharacter--;
	localStorage.setItem('character', this.currentCharacter);
};

export {
	Character
};