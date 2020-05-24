import React, { Fragment } from 'react';
import s from './registreren.module.less';
import { Title } from "@components/title/Title";

import RegistrerenContainer from "@containers/registreren-container/RegistrerenContainer";
import { CharacterHub } from "./components/index";

export const Registreren = (): JSX.Element =>
{
	return (
		<Fragment>
			<Title suffex={
				<div className={s.button}> Help </div>
			}/>
			<div className={s.registrerenContainer} >
				<div className={s.registreren}>
					<div className={s.registrerenIntroductie}>
						<h1> Registreren </h1>
						<p>
							Om het spel te kunnen starten hebben wij een aantal gegevens van je nodig.
							<br />
							Dit hebben wij nodig zodat we jou creaties kunnen opslaan zodat je de volgende keer kan beginnen waar je geëindigd bent.
						</p>
					</div>
					
					<RegistrerenContainer />
					
				</div>
				<div className={s.userProfiel}>
					<CharacterHub />
				</div>
			</div>
		</Fragment>
	)
};