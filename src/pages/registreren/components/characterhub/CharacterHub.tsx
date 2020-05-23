import React from 'react';
import s from '../../registreren.module.less';

import char2 from '@assets/game/characters/character_2.png';
import clothes from '@assets/game/clothes/clothes_1.png';

export const CharacterHub = (): JSX.Element =>
{
	return (
		<div className={s.characterhub}>
			<div className={s.characterhubArrow} />
			<div className={s.characterhubPortret}>
				<img src={char2} alt="Character 1"/>
				<img src={clothes} alt="Clothes"/>
			</div>
			<div className={s.characterhubArrow}
				style={{ transform: 'rotate(180deg)' }}
			/>
		</div>
	)
};