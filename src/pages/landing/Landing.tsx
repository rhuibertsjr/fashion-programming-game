import React, { Fragment } from 'react';
import s from './landing.module.less';
import { Link } from 'react-router-dom';
import * as sk from "@components/socket-client/SocketClient";

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
				<Link to="/werkplaats">
					<button
						onClick={() => {
							sk.socket.emit("new user", sk.socket.id);
							sk.socket.on("new user", (getUser: any) => {
								console.log('a new user joined: ' +  getUser);
							});
						}}
					> Start het spel >
					</button>
				</Link>
				<p> Ik heb al een account </p>
			</div>
		</Fragment>
	)
};


