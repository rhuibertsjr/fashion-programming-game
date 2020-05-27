
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
			paragraph: 'In level 1 ga ik alle blokken uitleggen zodat je precies weet wat je moet doen. Het doel is om de jurk een kleur te geven met 1 cirkel er op. Dit doe je door de blokken op de juiste manier in elkaar te zetten en de cirkel de juiste plek te geven door de goede getallen in te vullen. Succes!'
		},
		{
			title: 'Level 2:',
			paragraph: 'In level 2 is het doel om jou gemaakte cirkel te herhalen zodat je een patroon krijgt. Dit doen je door je gemaakte cirkel te combineren met een herhaal blok. In dit blok kan je het aantal herhalingen aanpassen en zo een patroon creëren. Succes!'
		},
		{
			title: 'Level 3: ',
			paragraph: 'In level die ga je je voorbereiden op de modeshow. Het doel van dit level is een patroon te maken met twee verschillende vormen. Zoals je in level 2 hebt geleerd een figuur te herhalen, nu moet je een patroon maken met 2 figuren. Dit doe je ook met een blok uit de categorie herhalen. Succes!'
		},
		{
			title: 'Level 4: Vrijspel!',
			paragraph: 'Nu je alle level heb afgerond kan je eindelijk een modeshow beginnen.'
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