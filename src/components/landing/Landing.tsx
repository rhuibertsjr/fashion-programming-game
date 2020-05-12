import React, { Fragment } from 'react';
import s from './landing.module.less';
import { useHistory } from 'react-router-dom';
import {socket} from "@components/socket-client/SocketClient";

const history = useHistory();

export const Landing = (): JSX.Element =>
{
	
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
					onClick={() => {
						history.push('/werkplaats');
						
						socket.emit("new user", socket.id);
						socket.on("new user", (getUser: any) => {
							console.log('a new user joined: ' +  getUser);
						});
					}}
				> Start het spel >
				</button>
				<p> Ik heb al een account </p>
			</div>
		</Fragment>
	)
};


