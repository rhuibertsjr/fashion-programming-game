
declare interface Character
{
	currentCharacter: number;
	
	init(): void;
	
	getCharacter(): number;
	
	nextCharacter(): void;
	
	previousCharacter(): void
}

declare interface ICharacterHubState
{
	character: Character
}

