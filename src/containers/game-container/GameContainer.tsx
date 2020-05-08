import React, { PureComponent, createRef, RefObject } from "react";
import * as PIXI from 'pixi.js';
import s from './game.module.less';

import character_1_body from '@assets/game/characters/character_1_body.png';
import character_1_clothes from '@assets/game/characters/character_1_clothes.png';

class GameContainer extends PureComponent<{}, IGameState>
{
	private readonly game: PIXI.Application;
	private readonly gameRef: RefObject<HTMLDivElement>;
	
	public state: IGameState = {
		charachters: [
			{
				body: PIXI.Sprite.from(character_1_body),
				clothes: PIXI.Sprite.from(character_1_clothes)
			}
		],
		stage: null
	};
	
	constructor(props: any)
	{
		super(props);
		this.gameRef = createRef();
		this.game = new PIXI.Application({
			resolution: window.devicePixelRatio,
			backgroundColor: 0xffffff,
			antialias: true,
			forceFXAA: true,
			
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
		const container = new PIXI.Container();
		
		const character_body = this.state.charachters[0].body;
		const character_clothes = this.state.charachters[0].clothes;
		
		character_clothes.scale.set(.19, .19);
		character_clothes.anchor.set(.5, .5);
		character_clothes.position.set(
			this.game.renderer.width / 2,
			this.game.renderer.height /2
		);
		container.addChild(character_clothes);
		
		// container.mask = character_clothes;
		
		character_body.scale.set(.19, .19);
		character_body.anchor.set(.5, .5);
		character_body.position.set(
			this.game.renderer.width / 2,
			this.game.renderer.height /2
		);
		stage.addChild(container, character_body);
		
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