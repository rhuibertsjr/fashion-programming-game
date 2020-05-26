
const Ranking = function (this: any)
{
	if (localStorage.getItem('level'))
	{
		this.counter = localStorage.getItem('level');
	}
	else
	{
		this.counter = 0;
	}
	
	this.levelContent =
	[
		{
			title: 'Level 1: Het eerste figuur.',
			paragraph: 'Level 1'
		},
		{
			title: 'Hallo ik ben level 2',
			paragraph: 'Level 2'
		},
		{
			title: 'Hallo ik ben level 3',
			paragraph: 'Level 3'
		},
		{
			title: 'Vrijspel',
			paragraph: 'Vrijspel'
		}
	];
	
} as any as {
	new (): Ranking
};

Ranking.prototype.init = function (): void
{
	if (localStorage.getItem('level')) return;
	localStorage.setItem('level', this.counter);
};

Ranking.prototype.getLevel = function (): number
{
	let currentLevel: string | null = localStorage.getItem('level');
	
	if (currentLevel) return parseInt(currentLevel);
	
	return 0;
};

Ranking.prototype.incrementLevel = function (): void
{
	if (this.counter >= 3) return;
	
	this.counter++;
	localStorage.setItem('level', this.counter);
};

Ranking.prototype.decreaseLevel = function (): void
{
	if (this.counter <= 0) return;
	
	this.counter--;
	localStorage.setItem('level', this.counter);
};

Ranking.prototype.getLevelDetails = function (): string[]
{
	return [
		this.levelContent[this.counter].title,
		this.levelContent[this.counter].paragraph
	];
};

export {
	Ranking
};