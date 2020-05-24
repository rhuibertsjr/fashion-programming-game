import React, { PureComponent, Fragment } from 'react';
import { Route } from 'react-router-dom';
import s from './ranking.module.less';

import { Ranking } from "@components/index";
import SocketChat from "@components/socket-client/socket-chat/SocketChat";


export class RankingComponent extends PureComponent<{}, IRankingState> {


	public state: IRankingState =
	{
		toggle: false,
		rank: new Ranking()
	};
	
	public componentDidMount(): void
	{
		this.state.rank.init();
	}
	
	private nextLevel = (): void =>
	{
		this.state.rank.incrementLevel();
		this.forceUpdate();
	};
	
	private previousLevel = (): void =>
	{
		this.state.rank.decreaseLevel();
		this.forceUpdate();
	};

	public render(): JSX.Element
	{
		return (
			<Fragment>
				<div className={s.rankingContainer}>
					<Route path="/werkplaats">
						<div className={s.rankings}>
							<p> Level: </p>
							<button className={s.rankingsButton} onClick={this.previousLevel} />
							{ this.state.rank.levelContent.map((_value, i, _array) => {
								if (i <= this.state.rank.counter) {
									return (
										<div className={s.rankingsLevel} key={i}>
											<p>{i + 1}</p>
										</div>
									)
								} else {
									return <div className={s.rankingsLevel} key={i} style={{ opacity: .6 }} />
								}
							})}
							<button className={s.rankingsButton} onClick={this.nextLevel} />
							<p> Modeshow punten: </p>
							<div className={s.rankingsPoints} />
						</div>
						<div className={s.rankingContainerButtons}>
							<button>Terug naar lobby </button>
							<button onClick={() => {this.setState({toggle: !this.state.toggle})}}>Chat</button>
							<div className="chatOuterDiv" style={ this.state.toggle ? {right: '0%'} : {right:'-100%'}}>
								<SocketChat />
							</div>
						</div>
					</Route>
					<Route path={['/dashboard', '/modeshow']}>
						<div className={s.rankings} style={{ width: '40%' }}>
							<p> Level: </p>
							<div className={s.rankingsLevel}>
								<p>{(this.state.rank.getLevel() + 1)}</p>
							</div>
							<p> Modeshow punten: </p>
							<div className={s.rankingsPoints} />
						</div>
						<div className={s.rankingContainerButtons}>
							<button style={{ width: '40%' }}> Jouw vriendenlijst </button>
						</div>
					</Route>
				</div>
			</Fragment>
		);
	}
}