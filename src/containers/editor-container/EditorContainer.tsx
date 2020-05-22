import React, { PureComponent, createRef, RefObject, Fragment } from "react";
import s from './editor.module.less';

import GameContainer from "@containers/game-container/GameContainer";

import { inject, Workspace } from "blockly";
import Compiler from 'blockly/javascript';
import './components/blocks/Language';

import { toolbox, Styles } from './components';
import './components/blocks/Blocks';
import * as sk from "@components/socket-client/SocketClient";
import { Title, Ranking, RankingComponent } from "@components/index";

class EditorContainer extends PureComponent<{}, IEditorState>
{
	private readonly editor: RefObject<HTMLDivElement>;
	private workspace: Workspace | undefined;
	
	public state: IEditorState =
	{
		code: " ",
		ranking: new Ranking()
	};
	
	constructor(props: any)
	{
		super(props);
		this.editor = createRef();
	}

	public componentDidMount(): void
	{
		this.state.ranking.init();
		
		// Timeout is needed because of how blockly loads a component.
		setTimeout(() =>
		{
			if (this.editor.current)
			{
				this.workspace = inject(this.editor.current, {
					toolbox: toolbox,
					theme: Styles,
					move: {
						scrollbars: false
					}
				});
			}
		}, 50);
	}
	
	private onRunEventHandler = (): void =>
	{
		const code = Compiler.workspaceToCode(this.workspace);
		
		sk.socket.emit("share code", code);
		sk.socket.on("share code", (getdata: any) => {
			console.log('Shared code: ' + getdata);
			console.log('User: ', sk.socket.id);
		});
		
		this.setState({
			code: Compiler.workspaceToCode(this.workspace)
		});
		
	};
	
	private nextLevel = (): void =>
	{
		this.state.ranking.incrementLevel();
		console.log(this.state.ranking.getLevelDetails());
	};
	
	private previousLevel = (): void =>
	{
		this.state.ranking.decreaseLevel();
		console.log(this.state.ranking.getLevelDetails());
	};
	
	public render(): JSX.Element
	{
		console.log(this.nextLevel(), this.previousLevel());
		return (
			<Fragment>
				<Title />
				<RankingComponent />
				<div className={s.appEditorContainer}>
					<div className={s.appRunButton}>
						<button onClick={this.onRunEventHandler} />
						<button onClick={this.onRunEventHandler} />
					</div>
					<div
						className={s.appEditor}
						ref={this.editor}
					/>
				</div>
				<GameContainer code={this.state.code} />
				<div className={s.toolboxButtons}>
					<button> Hint! </button>
					<button> Reset </button>
				</div>
			</Fragment>
		);
	}
	
}

export default EditorContainer