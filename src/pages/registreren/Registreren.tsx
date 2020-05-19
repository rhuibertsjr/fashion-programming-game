import React, { Fragment } from 'react';
import s from './registreren.module.less';
import { Title } from "@components/title/Title";

export const Registreren = (): JSX.Element =>
{
	
	return (
		<Fragment>
			<Title suffex={
				<div className={s.button}> Help </div>
			}/>
		</Fragment>
	)
};