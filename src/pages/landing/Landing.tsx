import React, { Fragment } from 'react';
import s from './landing.module.less';
import { Link } from 'react-router-dom';
import * as sk from "@components/socket-client/SocketClient";

import codeImage from '@assets/images/codeImage.jpg';
import modeshow from '@assets/images/modeshow.png';
import users from '@assets/images/users.jpg';

export const Landing = (): JSX.Element =>
(
	<Fragment>
		<div className={s.appLandingContainer}>
			<h1> Dresscode </h1>
			<h2>
				Welkom bij Dresscode!
				<br />
				Maak een jurk met jouw eigen patroon erop. Een leuke manier
				om te leren programmeren voor echte fasionista's.
			</h2>
			<Link to="/registreren">
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
			<Link to="/login">
				<p> Ik heb al een account </p>
			</Link>
		</div>
		
		<a href="http://milenaspaan.nl">
			<button className={s.contact}>Contact</button>
		</a>
		
		<div className={s.imageContainer}>
			<div className={s.codeImage}>
				<img className={s.image} src={codeImage} alt="Dresscode code image"/>
			</div>
			<div className={s.modeshow}>
				<img className={s.image} src={modeshow} alt="Dresscode modeshow image"/>
			</div>
			<div className={s.users}>
				<img className={s.image} src={users} alt="Dresscode users image"/>
			</div>
		</div>
	</Fragment>
);


