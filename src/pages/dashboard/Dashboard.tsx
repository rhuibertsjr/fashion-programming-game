import React, {Fragment, useState} from 'react';
import {Title, RankingComponent, Character} from "@components/index";
import { Link } from "react-router-dom";

import s from './dashboard.module.less'

import char1 from '@assets/game/characters/character_1.png';
import char2 from '@assets/game/characters/character_2.png';
import char3 from '@assets/game/characters/character_3.png';
import char4 from '@assets/game/characters/character_4.png';
import clothes from '@assets/game/clothes/clothes_1.png';

export const Dashboard = (): JSX.Element =>
{

	let [ showPanel, setPanel ] = useState(false);

	const character = [
		char1, char2, char3, char4
	];

	const characterLib = new Character();
	const currentCharacter = characterLib.getCharacter();
	const username = localStorage.getItem('username');



	const [room, setRoom] = useState('');

	return (
		<Fragment>
			<Title
				suffex={
					<div className={s.button}>
						<Link to="/uitleg/hello">
							Help
						</Link>
					</div>
				}
			/>
			<RankingComponent />
			<div className={s.appDashboardContainer}>
				<div className={s.appDashboardContainerUser}>
					<div className={s.appDashboardContainerUserFloor} />
					<h1> {username ? username : ''} </h1>
					<div className={s.appDashboardContainerUserProfile}>
						<img src={character[currentCharacter]} alt="Dresscode Character"/>
						<img src={clothes} alt="Dresscode Character"/>
					</div>
					<div className={s.appDashboardContainerUserPaletteContainer}>
						<div className={s.info}>
							<div className={s.infoFirstView} style={ showPanel ? { opacity: '0' } : { opacity: '1' } }>
								<p>Hier worden de patronen opgeslagen. Bij het ben je klaar om jouw gemaakte patronen te showen op de modeshow.</p>
								<button onClick={() => setPanel(true)}> Volgende </button>
							</div>
							<div className={s.infoSecondView} style={ showPanel ? { opacity: '1' } : { opacity: '0' } }>
								<p>Op jouw dashboard kun je je vriendenlijst zien en de code die je door kunt sturen. Start het spel door op het aangegeven + te klikken</p>
							</div>
						</div>
						<Link to="/werkplaats">
							<div className={s.pallete}>
								<div className={s.column}>
									<div className={s.block} />
									<div className={s.block} />
									<div className={s.block} />
								</div>
								<div className={s.column}>
									<div className={s.block} />
									<div className={s.block} />
									<div className={s.block} />
								</div>
								<div className={s.column}>
									<div className={s.block} />
									<div className={s.block} />
									<Link to="/modeshow">
										<div className={s.block}  />
									</Link>
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className={s.appDashboardContainerFriendlist}>
					<div className={s.appDashboardContainerFriendlistText}>
						<h1> Nodig vrienden uit! </h1>
						<p>Kopieer deze link en stuur het door naar je vriendinnen om ze uit te nodigen! Hoe leuk is het om met elkaar te kunnen chatten en modeshows van elkaar te bekijken?</p>
						<input type="text"
							   placeholder="JOUWLINK123"
							   onChange={(event) => setRoom(event.target.value)}
						/>
						<Link  onClick={e => (!room) ? e.preventDefault() : null} to={`/werkplaats?room=${room}`}>
							<button className={s.maakGroep} type="submit">maak groep</button>
						</Link>
						<p>of</p>
						<p> Bekijk jouw vrienden </p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};