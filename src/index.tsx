
import React, { Fragment } from "react";
import {render} from "react-dom";
import './index.less';

import EditorContainer from "./containers/editor-container/EditorContainer";

export const App = (): JSX.Element => (
	<Fragment>
		<EditorContainer />
	</Fragment>
);

document.addEventListener('DOMContentLoaded', () => render(
	<App />, document.getElementById('app')
));