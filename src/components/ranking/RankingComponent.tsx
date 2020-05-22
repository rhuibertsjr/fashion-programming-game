import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import s from './ranking.module.less';

import { Ranking } from "@components/index";

export class RankingComponent extends PureComponent<{}, IRankingState> {
	
	public state: IRankingState =
	{
		rank: new Ranking()
	};
	
	public componentDidMount(): void
	{
		this.state.rank.init();
	}
	
	public render(): JSX.Element
	{
		return (
			<div className={s.rankingContainer}>
				<Route path="/werkplaats">
					<div className={s.rankings}>
						<p> Level: </p>
						<button className={s.rankingsButton} />
						{ this.state.rank.levelContent.map((_value, i, _array) => {
							return (
								<div className={s.rankingsLevel} key={i}>
									<p>{i + 1}</p>
								</div>
							)
						})}
						<button className={s.rankingsButton} />
						<p> Modeshow punten: </p>
						<div className={s.rankingsPoints} />
					</div>
					<div className={s.rankingContainerButtons}>
						<button> Terug naar lobby </button>
						<button> Chat </button>
					</div>
				</Route>
			</div>
		);
	}
}