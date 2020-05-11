import React, { PureComponent, createRef, RefObject } from "react";
import s from './editor.module.less';

import { inject, Workspace } from "blockly";
import Compiler from 'blockly/javascript';
import { toolbox } from './components';
import * as Blocks from './components/blocks/Blocks';

class EditorContainer extends PureComponent
{
	private readonly editor: RefObject<HTMLDivElement>;
	private workspace: Workspace | undefined;

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
		console.log(Blocks);
	}

	private onRunEventHandler = (): void => {
		const code = Compiler.workspaceToCode(this.workspace);

		try
		{
			eval(code);
		}
		catch (e)
		{
			throw new Error(`Cannot run the code: ${e}`);
		}
	};

	public render(): JSX.Element
	{
		return (
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
		);
	}
	
}
export default EditorContainer