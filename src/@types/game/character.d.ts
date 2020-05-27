
declare interface Character
{
	currentCharacter: number;
	
	init(): void;
	
	getCharacter(): number;
	
	nextCharacter(): void;
	
	previousCharacter(): void;
	
	isMember(): boolean;
}

declare interface ICharacterHubState
{
	character: Character
}

