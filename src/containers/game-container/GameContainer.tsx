import React, { PureComponent, createRef, RefObject } from "react";
import * as PIXI from 'pixi.js';
import s from './game.module.less';

import character_1 from '@assets/game/characters/character_1.png';

class GameContainer extends PureComponent<{}, IGameState>
{
	private readonly game: PIXI.Application;
	private readonly gameRef: RefObject<HTMLDivElement>;
	
	public state: IGameState = {
		charachters: [
			PIXI.Sprite.from(character_1)
		],
		stage: null
	};
	
	constructor(props: any)
	{
		super(props);
		this.gameRef = createRef();
		this.game = new PIXI.Application({
			backgroundColor: 0xffffff,
			antialias: process.env.NODE_ENV !== 'development',
		});
	}
	
	public componentDidMount(): void
	{
		if (this.gameRef.current) this.gameRef.current.append(this.game.view);
		this.game.start();
		this.initializeGameObjects();
	}
	
	public componentWillUnmount(): void
	{
		this.game.stop();
	}
	
	private initializeGameObjects = (): void =>
	{
		const stage = new PIXI.Container();
		const character = this.state.charachters[0];
		
		character.scale.set(.09, .09);
		character.anchor.set(.5, .5);
		character.position.set(
			this.game.renderer.width / 2,
			this.game.renderer.height /2
		);
		
		stage.addChild(character);
		this.setState({
			stage: stage
		});
		
		this.currentGameLoop();
	};
	
	private animateGameObjects = (): void =>
	{
	
	};
	
	private currentGameLoop = (): void =>
	{
		if (this.state.stage) this.game.renderer.render(this.state.stage);
		this.animateGameObjects();
		requestAnimationFrame(this.currentGameLoop);
	};
	
	public render(): JSX.Element
	{
		return (
			<div className={s.appGameContainer}>
				<div
					className={s.appGame}
					ref={this.gameRef}
				/>
			</div>
		);
	}
	
}
export default GameContainer