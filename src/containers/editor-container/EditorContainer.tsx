import React, { PureComponent, createRef, RefObject } from "react";
import s from './editor.module.less';

import { inject, Workspace } from "blockly";
import Compiler from 'blockly/javascript';
import toolbox from './toolbox/toolbox.xml';

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
		if (this.editor.current != null) {
			// @ts-ignore
			this.workspace = inject(this.editor.current, {
				toolbox: toolbox,
				move: {
					scrollbars: false
				}
			})
		} else throw new Error('Editor: cannot initialize the workspace');
	}
	
	private onRunEventHandler = (): void => {
		const code = Compiler.workspaceToCode(this.workspace);
		console.log(code);
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