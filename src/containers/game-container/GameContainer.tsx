import React, { PureComponent, createRef, RefObject } from "react";
import * as PIXI from 'pixi.js';
import s from './game.module.less';

import character_1 from '@assets/game/characters/character_1.png';
import character_2 from '@assets/game/characters/character_2.png';
import character_3 from '@assets/game/characters/character_3.png';
import character_4 from '@assets/game/characters/character_4.png';
import clothes_1 from '@assets/game/clothes/clothes_1.png';

class GameContainer extends PureComponent<IGameProps, IGameState>
{
	private readonly game: PIXI.Application;
	private readonly gameRef: RefObject<HTMLDivElement>;
	
	public state: IGameState = {
		charachters: [
			{
				body: PIXI.Sprite.from(character_1),
				playable: true,
				active: false
			},
			{
				body: PIXI.Sprite.from(character_2),
				playable: true,
				active: true
			},
			{
				body: PIXI.Sprite.from(character_3),
				playable: true,
				active: false
			},
			{
				body: PIXI.Sprite.from(character_4),
				playable: true,
				active: false
			}
		],
		clothes: [
			PIXI.Sprite.from(clothes_1)
		],
		stage: null,
		old_stage: null
	};
	
	constructor(props: any)
	{
		super(props);
		this.gameRef = createRef();
		this.game = new PIXI.Application({
			backgroundColor: 0xffffff,
			width: 2300,
			height: 3200,
		});
		PIXI.settings.RESOLUTION = window.devicePixelRatio;
	}
	
	public componentDidMount(): void
	{
		if (this.gameRef.current) this.gameRef.current.append(this.game.view);
		this.game.start();
		this.initializeGameObjects();
	}
	
	public componentDidUpdate(): void
	{
		this.updateUserObjects();
	}
	
	public componentWillUnmount(): void
	{
		this.game.stop();
	}
	
	private initializeGameObjects = (): void =>
	{
		const stage = new PIXI.Container();
		const container = new PIXI.Container();
		
		const under = PIXI.Sprite.from(clothes_1);
		under.anchor.set(.5, .5);
		under.position.set(
			this.game.renderer.width / 2,
			this.game.renderer.height /2
		);
		
		const backstage = new PIXI.Graphics();
		backstage.beginFill(0xFAFAFA);
		backstage.drawRect(0, this.game.renderer.height - 300, this.game.renderer.width, 300);
		backstage.endFill();
		
		let body = this.state.charachters[0].body;
		this.state.charachters.map((character) =>
		{
			if (character.playable && character.active) {
				body = character.body;
			}
			
			body.anchor.set(.5, .5);
			body.position.set(
				this.game.renderer.width / 2,
				this.game.renderer.height /2
			);
		});
		
		let character_clothes = this.state.clothes[0];
		character_clothes.anchor.set(.5, .5);
		character_clothes.position.set(
			this.game.renderer.width / 2,
			this.game.renderer.height /2
		);
		
		container.addChild(character_clothes);
		stage.addChild(
			backstage,
			body,
			under,
			container
		);
		
		console.log(this.state.stage);
		
		this.setState({ stage: stage, old_stage: stage });
		this.currentGameLoop();
	};
	
	private updateUserObjects = (): void =>
	{
		// @ts-ignore
		this.state.stage?.children[3].children.map((child: any, index: number) => {
			if (index > 0) {
				//@ts-ignore
				this.state.stage?.children[3].removeChild(child);
			}
		});
		
		this.setState({
			stage: this.state.old_stage
		});
		
		// @ts-ignore
		const PIXIJS = PIXI;
		console.log(this.props.code);
		eval(this.props.code);
		
		this.currentGameLoop();
	};
	
	private currentGameLoop = (): void =>
	{
		if (this.state.stage) this.game.renderer.render(this.state.stage);
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