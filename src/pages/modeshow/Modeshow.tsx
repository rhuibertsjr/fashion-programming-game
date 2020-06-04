import React, { Fragment } from 'react';
import {Title, RankingComponent, Character} from "@components/index";
import { Link } from "react-router-dom";
import s from './modeshow.module.less'

import spotlight from '@assets/images/spotlight.png';
import clothes from "@assets/game/clothes/clothes_2.png";
import char1 from "@assets/game/characters/character_1.png";
import char2 from "@assets/game/characters/character_2.png";
import char3 from "@assets/game/characters/character_3.png";
import char4 from "@assets/game/characters/character_4.png";
import charIcon from '@assets/game/characters/test_char.png';

export const Modeshow = (): JSX.Element =>
{
	
	const character = [
		char1, char2, char3, char4
	];
	
	const characterLib = new Character();
	const currentCharacter = characterLib.getCharacter();
	const username = localStorage.getItem('username');
	
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
			<div className={s.appModeshowContainer}>
				<div className={s.appModeshow}>
					<h1> { username ? username : '[Character Name]' } </h1>
					<div className={s.appModeshowFloor} />
					<img className={s.appModeshowSpotlightFirst} src={spotlight} alt="Dresscode spotlight"/>
					<img className={s.appModeshowSpotlightLast} src={spotlight} alt="Dresscode spotlight"/>
					<div className={s.appModeshowUser}>
						<img src={character[currentCharacter]} alt="Dresscode Character"/>
						<img src={clothes} alt="Dresscode Character"/>
					</div>
				</div>
				<div className={s.appFriends}>
					<h1> Aantal bezoekers: 1 </h1>
					<p> {username}'s show </p>
					<div className={s.modeshowUsers}>
						<div className={s.modeshowUsersCon}>
							<img src={charIcon} alt="Dresscode char icon"/>
							<div className={s.modeshowUsersConText}>
								<h1>Lola123</h1>
								<p>Level 2</p>
							</div>
						</div>
						<div className={s.modeshowUsersCon}>
							<img src={charIcon} alt="Dresscode char icon"/>
							<div className={s.modeshowUsersConText}>
								<h1>Samx</h1>
								<p>Level: 1</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};