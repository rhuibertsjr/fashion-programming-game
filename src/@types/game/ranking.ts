
declare interface Ranking {
	
	counter: number
	
	levelContent: LevelContent[]
	
	init(): void
	
	getLevel(): number
	
	getLevelDetails(): string
	
	incrementLevel(): void
	
	decreaseLevel(): void
	
	userCompletedTask(): void
	
}

interface LevelContent {
	title: string
}