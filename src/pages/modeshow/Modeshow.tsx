import React, { Fragment } from 'react';
import { Title, RankingComponent } from "@components/index";
import s from './modeshow.module.less'

export const Modeshow = (): JSX.Element =>
{
	return (
		<Fragment>
			<Title
				suffex={
					<div className={s.button}> Help </div>
				}
			/>
			<RankingComponent />
			<div className={s.appModeshowContainer}>
			
			</div>
		</Fragment>
	);
};