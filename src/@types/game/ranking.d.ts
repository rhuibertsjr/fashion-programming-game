
declare interface Ranking {
	/*
		The current level the user is on.
	 */
	counter: number;
	/*
		The content of the current level.
	 */
	levelContent: LevelContent[];
	/*
		Initialize users who play the game for the first time.
	 */
	init(): void;
	/*
		Returns the current level where the user is on.
	 */
	getLevel(): number;
	/*
		Returns the level content of the current level.
	 */
	getLevelDetails(): string;
	/*
		Increments the current level.
	 */
	incrementLevel(): void;
	/*
		Decreases the current level.
	 */
	decreaseLevel(): void;
}

interface LevelContent {
	title: string
}

interface IRankingState {
	rank: Ranking
	toggle: boolean
}