import React from 'react';
import s from './modal.module.less';
import { Link } from "react-router-dom";

import character_hero from '@assets/game/characters/character_hero.png';

export const Modal = (props: IModalProps): JSX.Element =>
{
	return (
		<div className={s.modalContainer}>
			<div className={s.modal}>
				<div className={s.modalTextContainer}>
					<h1 className={s.modalTitle}> {props.title} </h1>
					<p className={s.modalParagraph}> {props.paragraph} </p>
				</div>
				<Link to={props.to}>
					<button
						className={s.modalButton}
						style={props.width ? props.width : {} }
						onClick={props.onClick}
					>
						Volgende Stap
					</button>
				</Link>
				<div className={s.modalCharacter}>
					<img src={character_hero} alt="Dresscode Jodie :)"/>
				</div>
			</div>
		</div>
	)
};
