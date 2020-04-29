import React, { PureComponent } from "react";
import s from './editor.module.less';

class EditorContainer extends PureComponent
{
	constructor(props: any)
	{
		super(props);
	}
	
	public render(): JSX.Element
	{
		return (
			<div className={s.appEditorContainer}>
			
			</div>
		);
	}
	
}
export default EditorContainer