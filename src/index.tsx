
import React, { Fragment } from "react";
import {render} from "react-dom";
import './index.less';

import EditorContainer from "./containers/editor-container/EditorContainer";
import GameContainer from "./containers/game-container/GameContainer";

export const App = (): JSX.Element => (
	<Fragment>
		<EditorContainer />
		<GameContainer />
	</Fragment>
);

document.addEventListener('DOMContentLoaded', () => render(
	<App />, document.getElementById('app')
));