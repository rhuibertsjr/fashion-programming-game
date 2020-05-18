
import React from "react";
import { render } from "react-dom";
import './index.less';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Landing } from "@pages/index";
import EditorContainer from "@containers/editor-container/EditorContainer";

export const App = (): JSX.Element => (
	<Router>
		<Route exact path="/">
			<Landing />
		</Route>
		<Route path="/werkplaats" >
			<EditorContainer />
		</Route>
	</Router>
);

document.addEventListener('DOMContentLoaded', () => render(
	<App />, document.getElementById('app')
));