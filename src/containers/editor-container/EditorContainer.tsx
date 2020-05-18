import React, { PureComponent, createRef, RefObject, Fragment } from "react";
import s from './editor.module.less';

import GameContainer from "@containers/game-container/GameContainer";

import { inject, Workspace } from "blockly";
import Compiler from 'blockly/javascript';
import './components/blocks/Language';

import { toolbox } from './components';
import './components/blocks/Blocks';
// import * as sk from "@components/socket-client/SocketClient";
import { Title, Ranking } from "@components/index";

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
					move: {
						scrollbars: false
					}
				});
			}
		}, 50);
	}
	
	private onRunEventHandler = (): void =>
	{
		// const code = Compiler.workspaceToCode(this.workspace);
		
		// sk.socket.emit("share code", code);
		// sk.socket.on("share code", (getdata: any) => {
		// 	console.log('Shared code: ' + getdata);
		// 	console.log('User: ', sk.socket.id);
		// });
		
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
		return (
			<Fragment>
				<Title />
				<div className={s.appEditorContainer}>
					<div className={s.appRunButton}>
						<button onClick={this.onRunEventHandler}>
							Run
						</button>
						<button onClick={this.nextLevel}>
							Increment
						</button>
						<button onClick={this.previousLevel}>
							Decrease
						</button>
					</div>
					<div
						className={s.appEditor}
						ref={this.editor}
					/>
				</div>
				<GameContainer code={this.state.code} />
			</Fragment>
		);
	}
	
}

export default EditorContainer