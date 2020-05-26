import React, { PureComponent } from 'react';
import { Route, Link } from 'react-router-dom';
import s from './ranking.module.less';

import { Ranking } from "@components/index";
import SocketChat from "@components/socket-client/socket-chat/SocketChat";


export class RankingComponent extends PureComponent<IRankingProps, IRankingState> {
	
	public state: IRankingState =
	{
		toggle: false,
		rank: new Ranking()
	};
	
	constructor(props: any)
	{
		super(props);
	}
	
	private nextLevel = (): void =>
	{
		if (this.props.rank) this.props.rank.incrementLevel();
		if (this.props.cb) this.props.cb();
		this.forceUpdate();
	};
	
	private previousLevel = (): void =>
	{
		if (this.props.rank) this.props.rank.decreaseLevel();
		if (this.props.cb) this.props.cb();
		this.forceUpdate();
	};

	public render(): JSX.Element
	{
		return (
			<div className={s.rankingContainer}>
				<Route path="/werkplaats">
					<div className={s.rankings}>
						<p> Level: </p>
						<button className={s.rankingsButton} onClick={this.previousLevel} />
						{this.props.rank && this.props.rank.levelContent.map((_value, i, _array) =>
						{
							if (this.props.rank && i <= this.props.rank.counter)
							{
								return (
									<div className={s.rankingsLevel} key={i}>
										<p>{i + 1}</p>
									</div>
								)
							} else
							{
								return <div className={s.rankingsLevel} key={i} style={{opacity: .6}}/>
							}
						})}
						<button className={s.rankingsButton} onClick={this.nextLevel} />
						<p> Modeshow punten: </p>
						<div className={s.rankingsPoints} />
					</div>
					<div className={s.rankingContainerButtons}>
						<button>
							<Link to="/dashboard" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
								Terug naar lobby
							</Link>
						</button>
						<button onClick={() => {this.setState({toggle: !this.state.toggle})}}>Chat</button>
						<div className="chatOuterDiv" style={ this.state.toggle ? {right: '0%', display: 'block'} : {right:'-100%', display: 'none'}}>
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
		);
	}
}