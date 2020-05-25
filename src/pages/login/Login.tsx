import React, { Fragment } from 'react';
import s from './login.module.less';
import { Title } from "@components/index";
import spotlight from '@assets/images/spotlight.png';
import blockly from '@assets/images/blockly.png';
import {Link} from "react-router-dom";

export const Login = (): JSX.Element =>
{
	return (
		<Fragment>
			<Title suffex={
				<div className={s.button}>
					<Link to="/uitleg/hello">
						Help
					</Link>
				</div>
			}/>
			<div className={s.loginContainer}>
				<div className={s.retrieveLogin}>
					<div className={s.retrieveLoginText}>
						<h1> Welkom terug! </h1>
						<p> Vul je email adres in en je krijgt dan binnen enkele minuten jou bevestigingscode binnen om jouw account te bevestigen! </p>
						<label>
							<input
								type="email"
								name="email"
								className={s.formInput}
								placeholder="Email"
								formNoValidate
							/>
						</label>						<button className={s.loginButton}> Verstuur </button>
					</div>
				</div>
				<div className={s.login}>
					<p> Vul hier jou ontvangen code in </p>
					<div className={s.validator}>
						<input maxLength={4} />
					</div>
					<Link to="/uitleg/hello" style={{ width: '30%', alignSelf: 'center' }}>
						<button className={s.loginButton} style={{ width: '100%', backgroundColor: '#23C8E5' }}> Start het spel </button>
					</Link>
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