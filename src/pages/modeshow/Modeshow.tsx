import React, { Fragment } from 'react';
import { Title, RankingComponent } from "@components/index";
import { Link } from "react-router-dom";
import s from './modeshow.module.less'

import spotlight from '@assets/images/spotlight.png';
import character_2 from "@assets/game/characters/character_1.png";
import clothes from "@assets/game/clothes/clothes_1.png";

export const Modeshow = (): JSX.Element =>
{
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
					<h1> [Character Name] </h1>
					<div className={s.appModeshowFloor} />
					<img className={s.appModeshowSpotlightFirst} src={spotlight} alt="Dresscode spotlight"/>
					<img className={s.appModeshowSpotlightLast} src={spotlight} alt="Dresscode spotlight"/>
					<div className={s.appModeshowUser}>
						<img src={character_2} alt="Dresscode Character"/>
						<img src={clothes} alt="Dresscode Character"/>
					</div>
				</div>
				<div className={s.appFriends}>
				
				</div>
			</div>
		</Fragment>
	);
};