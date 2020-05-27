import React from 'react';
import s from './loading.module.less';

export const Loading = (): JSX.Element => (
	<div className={s.loading}>
		<div className={s.loadingTitle}>
			<h1> Dresscode </h1>
			<br />
			<p> Loading... </p>
		</div>
	</div>
);