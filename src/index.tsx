
import React, { Suspense } from "react";
import { render } from "react-dom";
import './index.less';

import { HashRouter, Switch, Route } from 'react-router-dom';
import { Dashboard, Landing, Loading, Login, Modeshow, Registreren, Uitleg } from "@pages/index";
import '../public/favicon.ico'

const Werkplaats = React.lazy(() => import('./pages/index'));

export const App = (): JSX.Element =>
(
	<HashRouter>
		<Switch>
			<Route exact path="/">
				<Landing />
			</Route>
			<Route exact path="/login">
				<Login/>
			</Route>
			<Route exact path="/registreren">
				<Registreren/>
			</Route>
			<Route exact path="/dashboard">
				<Dashboard/>
			</Route>
			<Route path="/uitleg">
				<Uitleg />
			</Route>
			<Route exact path="/werkplaats">
				<Suspense fallback={<Loading />}>
					<Werkplaats />
				</Suspense>
			</Route>
			<Route exact path="/modeshow">
				<Modeshow/>
			</Route>
		</Switch>
	</HashRouter>
);

document.addEventListener('DOMContentLoaded', () => render(
	<App />, document.getElementById('app')
));