
import React from "react";
import {render} from "react-dom";
import './index.less';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import EditorContainer from "./containers/editor-container/EditorContainer";

export const App = (): JSX.Element => (
	<Router>
		<Route path="/">
			<EditorContainer />
		</Route>
	</Router>
);

document.addEventListener('DOMContentLoaded', () => render(
	<App />, document.getElementById('app')
));