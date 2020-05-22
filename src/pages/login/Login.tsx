import React, { Fragment } from 'react';
import s from './login.module.less';
import { Title, Input } from "@components/index";
import spotlight from '@assets/images/spotlight.png';
import blockly from '@assets/images/blockly.png';

export const Login = (): JSX.Element =>
{
	return (
		<Fragment>
			<Title suffex={
				<div className={s.button}> Help </div>
			}/>
			<div className={s.loginContainer}>
				<div className={s.retrieveLogin}>
					<div className={s.retrieveLoginText}>
						<h1> Welkom terug! </h1>
						<p> Vul je email adres in en je krijgt dan binnen enkele minuten jou bevestigingscode binnen om jouw account te bevestigen! </p>
						<Input labelName="E-mail" style={{ width: '80%' }}/>
						<button className={s.send}> Verstuur > </button>
					</div>
				</div>
				<div className={s.login}>
					<p> Vul hier jou ontvangen code in </p>
					<div className={s.validator}>
						<input maxLength={4} />
					</div>
					<button className={s.start}> Start het spel > </button>
				</div>
			</div>
			<div className={s.imageContainer}>
				<div className={s.spotlight}>
					<img src={spotlight} alt="Dresscode spotlight image"/>
				</div>
				<div className={s.blockly}>
					<img src={blockly} alt="Dresscode blockly image"/>
				</div>
			</div>
		</Fragment>
		
	)
};