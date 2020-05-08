
declare interface IGameState
{
	charachters: ICharacters[],
	stage: PIXI.Container | null
}

interface ICharacters
{
	body: PIXI.Sprite,
	clothes: PIXI.Sprite
}