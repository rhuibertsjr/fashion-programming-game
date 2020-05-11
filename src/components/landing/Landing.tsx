import React, { Fragment } from 'react';
import s from './landing.module.less';
import { useHistory } from 'react-router-dom';

export const Landing = (): JSX.Element =>
{
	const history = useHistory();
	
	return (
		<Fragment>
			<div className={s.appLandingContainer}>
				<h1> Dresscode </h1>
				<h2>
					Welkom bij Dresscode!
					<br/>
					Maak een jurk met jouw eigen patroon erop. Een leuke manier
					<br/>
					om te leren programmeren voor echte fasionista's.
				</h2>
				<button
					onClick={() => history.push('/werkplaats')}
				> Start het spel >
				</button>
				<p> Ik heb al een account </p>
			</div>
		</Fragment>
	)
};
