import React from 'react';
import s from './input.module.less';
import { IInputProps } from "../../@types/others/input";

export const Input = (props: IInputProps = { labelName: "", style: {} }): JSX.Element =>
(
	<label>
		<input className={s.input} placeholder={props.labelName} style={props.style} />
	</label>
);