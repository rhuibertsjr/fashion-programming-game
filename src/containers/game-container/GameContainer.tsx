import React, { PureComponent, createRef, RefObject } from "react";
import { Application } from 'pixi.js';
import s from './game.module.less';

class GameContainer extends PureComponent
{
	private readonly game: PIXI.Application;
	private readonly gameRef: RefObject<HTMLDivElement>;
	
	constructor(props: any)
	{
		super(props);
		this.gameRef = createRef();
		this.game = new Application({
			width: 500,
			height: 500,
			backgroundColor: 0x1099bb
		});
	}
	
	public componentDidMount(): void
	{
		if (this.gameRef.current) this.gameRef.current.append(this.game.view);
		this.game.start();
	}
	
	public componentWillUnmount(): void
	{
		this.game.stop();
	}
	
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