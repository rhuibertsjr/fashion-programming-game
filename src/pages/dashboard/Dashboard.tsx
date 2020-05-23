import React, { Fragment } from 'react';
import s from './dashboard.module.less'
import { Title, RankingComponent } from "@components/index";

import character_2 from '@assets/game/characters/character_1.png';
import clothes from '@assets/game/clothes/clothes_1.png';

export const Dashboard = (): JSX.Element =>
{
	return (
		<Fragment>
			<Title
				suffex={
					<div className={s.button}> Help </div>
				}
			/>
			<RankingComponent />
			<div className={s.appDashboardContainer}>
				<div className={s.appDashboardContainerUser}>
					<div className={s.appDashboardContainerUserFloor} />
					<h1> [Character Name] </h1>
					<div className={s.appDashboardContainerUserProfile}>
						<img src={character_2} alt="Dresscode Character"/>
						<img src={clothes} alt="Dresscode Character"/>
					</div>
					<div className={s.appDashboardContainerUserPaletteContainer}>
						<div className={s.info}>
							<p>Hier worden de patronen opgeslagen. Bij het ben je klaar om jouw gemaakte patronen te showen op de modeshow.</p>
							<button> Volgende </button>
						</div>
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
								<div className={s.block} />
							</div>
						</div>
					</div>
				</div>
				<div className={s.appDashboardContainerFriendlist}>
					<div className={s.appDashboardContainerFriendlistText}>
						<h1> Nodig vrienden uit! </h1>
						<p>Kopieer deze link en stuur het door naar je vriendinnen om ze uit te nodigen! Hoe leuk is het om met elkaar te kunnen chatten en modeshows van elkaar te bekijken?</p>
						<input type="text" placeholder="JOUWLINK123"/>
						<p>of</p>
						<p> Bekijk jouw vrienden </p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};