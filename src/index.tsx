
import React from "react";
import {render} from "react-dom";
import './index.less';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import EditorContainer from "./containers/editor-container/EditorContainer";
import GameContainer from "./containers/game-container/GameContainer";

export const App = (): JSX.Element => (
	<Router>
		<Route path="/">
			<EditorContainer />
			<GameContainer />
		</Route>
	</Router>
);

document.addEventListener('DOMContentLoaded', () => render(
	<App />, document.getElementById('app')
));