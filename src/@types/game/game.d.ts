
declare interface IGameState
{
	charachters: any,
	currentCharacter: number
	clothes: PIXI.Sprite[]
	stage: PIXI.Container | null,
	old_stage: PIXI.Container | null,
}

declare interface IGameProps
{
	code: string
}