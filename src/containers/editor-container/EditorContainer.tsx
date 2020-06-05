import React, { PureComponent, createRef, RefObject, Fragment } from "react";
import s from './editor.module.less';

import GameContainer from "@containers/game-container/GameContainer";

import { inject, Workspace } from "blockly";
import Compiler from 'blockly/javascript';
import './components/blocks/Language';

import { toolbox, Styles } from './components';
import './components/blocks/Blocks';
import * as sk from "@components/socket-client/SocketClient";
import {Title, Ranking, RankingComponent, Modal} from "@components/index";

class EditorContainer extends PureComponent<{}, IEditorState>
{
	private readonly editor: RefObject<HTMLDivElement>;
	private workspace: Workspace | undefined;
	
	public state: IEditorState =
	{
		code: " ",
		ranking: new Ranking(),
		visualCodeToggle: false,
		isOpen: false,
		toggleLevelScreen: true
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
						scrollbars: true
					}
				});
			}
		}, 50);
	}
	
	private onRunEventHandler = (): void =>
	{
		const code = Compiler.workspaceToCode(this.workspace);
		
		sk.socket.on("share code", (getdata: any) => {
			console.log('Shared code: ' + getdata);
			console.log('User: ', sk.socket.id);
		});
		sk.socket.emit("share code", code);

		this.setState({
			code: Compiler.workspaceToCode(this.workspace)
		});
		
	};
	
	private clearWorkspace = (): void =>
	{
		if (this.workspace !== undefined)
		{
			this.workspace.clear();
		}
	};
	
	private levelPopup = (): void =>
	{
		this.setState({
			toggleLevelScreen: !this.state.toggleLevelScreen
		});
	};
	
	private toggleChat = () =>
	{
		const { visualCodeToggle, isOpen } = this.state;
		
		this.setState({
			isOpen: !isOpen
		});
		
		if (visualCodeToggle)
		{
			this.setState({
				visualCodeToggle: false
			});
		}
		else if (!visualCodeToggle && isOpen)
		{
			this.setState({
				visualCodeToggle: false
			});
		}
		else if (visualCodeToggle && !isOpen)
		{
			this.setState({
				visualCodeToggle: true
			});
		}
	};
	
	private toggleCode = () =>
	{
		const { visualCodeToggle, isOpen } = this.state;
		
		this.setState({
			visualCodeToggle: !visualCodeToggle
		});
		
		if (isOpen)
		{
			this.setState({
				isOpen: false
			});
		}
		else if (!isOpen && visualCodeToggle)
		{
			this.setState({
				isOpen: false
			});
		}
		else if (isOpen && !visualCodeToggle)
		{
			this.setState({
				isOpen: true
			});
		}
	};
	
	public render(): JSX.Element
	{
		return (
			<Fragment>
				<Title />
				<RankingComponent rank={this.state.ranking} cb={this.levelPopup} chatToggle={this.toggleChat} isOpen={this.state.isOpen} />
				<div className={s.appEditorContainer}>
					<div className={s.appRunButton}>
						<button onClick={this.onRunEventHandler} />
						<button onClick={this.toggleCode} />
					</div>
					<div
						className={s.appEditor}
						ref={this.editor}
					>
						{
							this.state.toggleLevelScreen ? <Modal
								title={this.state.ranking.getLevelDetails()[0]}
								paragraph={this.state.ranking.getLevelDetails()[1]}
								to="/werkplaats"
								width={{width: '34%'}}
								onClick={this.levelPopup}
							/> : <div />
						}
					</div>
				</div>
				<GameContainer code={this.state.code} />
				<div className={s.toolboxButtons}>
					<button> Hint! </button>
					<button onClick={this.clearWorkspace}> Reset </button>
				</div>
				<div className={s.appCodeGenerator} style={this.state.visualCodeToggle ? { right: '0' } : { right: '-30%' }}>
					<h1> Hier is je geschreven code: </h1>
					<p> {this.state.code} </p>
				</div>
			</Fragment>
		);
	}
	
}

export default EditorContainer;