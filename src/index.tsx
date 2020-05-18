
import React, { Suspense } from "react";
import { render } from "react-dom";
import './index.less';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Landing, Uitleg, Loading } from "@pages/index";
const Werkplaats = React.lazy(() => import('./pages/index'));

export const App = (): JSX.Element => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/">
				<Landing />
			</Route>
			<Route exact path="/uitleg">
				<Uitleg />
			</Route>
			<Route exact path="/werkplaats">
				<Suspense fallback={<Loading />}>
					<Werkplaats />
				</Suspense>
			</Route>
		</Switch>
	</BrowserRouter>
);

document.addEventListener('DOMContentLoaded', () => render(
	<App />, document.getElementById('app')
));