import React, { PureComponent } from 'react';
import {Character} from "@components/index";
import s from '../../registreren.module.less';

import char1 from '@assets/game/characters/character_1.png';
import char2 from '@assets/game/characters/character_2.png';
import char3 from '@assets/game/characters/character_3.png';
import char4 from '@assets/game/characters/character_4.png';
import clothes from '@assets/game/clothes/clothes_1.png';

export class CharacterHub extends PureComponent {
	
	public state = {
		character: new Character(),
		playable_characters: [
			char1, char2, char3, char4
		]
	};
	
	public componentDidMount(): void
	{
		this.state.character.init();
	}
	
	private nextCharacter = (): void =>
	{
		this.state.character.nextCharacter();
		this.forceUpdate();
	};
	
	private previousCharacter = (): void =>
	{
		this.state.character.previousCharacter();
		this.forceUpdate();
	};
	
	public render(): JSX.Element
	{
		const { character, playable_characters } = this.state;
		
		return (
			<div className={s.characterhub}>
				<div
					className={s.characterhubArrow}
					onClick={this.previousCharacter}
				/>
				<div className={s.characterhubPortret}>
					<img src={playable_characters[character.getCharacter()]} alt="Dresscode playable character"/>
					<img src={clothes} alt="Clothes"/>
				</div>
				<div
					className={s.characterhubArrow}
					style={{ transform: 'rotate(180deg)' }}
					onClick={this.nextCharacter}
				/>
			</div>
		)
	}
}