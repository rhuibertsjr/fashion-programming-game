
declare interface Character
{
	currentCharacter: number;
	
	init(): void;
	
	getCharacter(): number;
	
	nextCharacter(): void;
	
	previousCharacter(): void;
	
	isMemeber(): boolean;
}

declare interface ICharacterHubState
{
	character: Character
}

