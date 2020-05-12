import React, { PureComponent, createRef, RefObject, Fragment } from "react";
import s from './editor.module.less';

import GameContainer from "@containers/game-container/GameContainer";

import { inject, Workspace } from "blockly";
import Compiler from 'blockly/javascript';
import './components/blocks/Language';

import { toolbox } from './components';
import './components/blocks/Blocks';
import {socket} from "@components/socket-client/SocketClient";
import { Title } from "@components/index";

class EditorContainer extends PureComponent<{}, IEditorState>
{
	private readonly editor: RefObject<HTMLDivElement>;
	private workspace: Workspace | undefined;
	
	public state: IEditorState =
	{
		code: " "
	};
	
	constructor(props: any)
	{
		super(props);
		this.editor = createRef();
	}

	public componentDidMount(): void
	{
		// @TODO: FIX REF OF THIS.EDITOR.CURRENT
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
		const code = Compiler.workspaceToCode(this.workspace);
		
		socket.emit("share code", code);
		socket.on("share code", (getdata: any) => {
			console.log('Shared code: ' + getdata);
			console.log('User: ', socket.id);
		});
		
		this.setState({
			code: Compiler.workspaceToCode(this.workspace)
		});
		
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