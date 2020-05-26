import React, { Fragment } from 'react';
import { Modal, Title } from "@components/index";
import { Link, Route } from "react-router-dom";
import s from './uitleg.module.less';

import blokken from '@assets/images/blokken.png';
import werkplaats from '@assets/images/werkplaats.png';
import editor from '@assets/images/editor.png';

export const Uitleg = (): JSX.Element =>
(
	<Fragment>
		<Title suffex={
			<div className={s.button}>
				<Link to="/uitleg/hello">
					Help
				</Link>
			</div>
		}/>
		<div className={s.uitlegContainer}>
			<div className={s.uitlegTitle}> Hoe werkt het? </div>
			<div className={s.uitlegProcesContainer}>
				<div className={s.procesBar} style={{ background: '#FD659B' }} />
				<div className={s.procesBar} />
				<div className={s.procesBar} />
			</div>
			<div className={s.uitlegTabel}>
				<div className={s.uitlegRow}>
					<div className={s.uitlegCell}>
						<div className={s.cellImage}>
							<img src={blokken} alt="Dresscode blokken image"/>
						</div>
						<div className={s.cellTextContainer}>
							<h1> Blokken </h1>
							<p>
								In deze game maak je gebruik van blokken. Elk blok heeft een andere kleur, elke kleur geeft een onderwerp aan. Er zijn 8 verschillende onderwerpen, Kleur, Rekenen, Herhaling, Tekst, Functies, Variabelen, Logica en Tabel. Deze blokken doen op zich zelf niet zo veel, pas wanneer je ze gaat combineren kan je hele mooie dingen maken.
							</p>
						</div>
					</div>
					<div className={s.uitlegCell}>
						<div className={s.cellImage}>
							<img src={werkplaats} alt="Dresscode blokken image"/>
						</div>
						<div className={s.cellTextContainer}>
							<h1> Werkplaats </h1>
							<p>
								In de werkplaats maak jij jouw patroon. Dit patroon maak je door de blokken van de elementenbox te slepen in de werkplaats. Wanneer je de blokken goed in elkaar hebt gezet krijg je jouw patroon.
							</p>
						</div>
					</div>
					<div className={s.uitlegCell}>
						<div className={s.cellImage}>
							<img src={editor} alt="Dresscode blokken image"/>
						</div>
						<div className={s.cellTextContainer}>
							<h1> Code weergeven </h1>
							<p>
								Als je klaar bent met het programmeren van je patroon hebt je eigenlijk echte code geschreven. Na het vertonen van je patroon kan je kijken wat de code van jouw create is.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Link to="/dashboard">
				<div className={`${s.secondButton} ${s.nextButton}`}> Volgende Stap </div>
			</Link>
			<Route path="/uitleg/hello">
				<Modal to="/uitleg" title="Hoi! Ik ben Jodie." paragraph="Ik ben hier om jou door de game te helpen. Je krijgt straks een uitleg van mij hoe de game werkt. Wanneer je tijdens de game hulp of een hint nodig hebt laat het me dan weten!" />
			</Route>
		</div>
	</Fragment>
);