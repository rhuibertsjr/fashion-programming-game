
import React from "react";
import {render} from "react-dom";
import './index.less';

export const App = (props: any): JSX.Element => (
	<h1>Hello {props.hello}</h1>
);

document.addEventListener('DOMContentLoaded', () => render(
	<App hello="World" />, document.getElementById('app')
));