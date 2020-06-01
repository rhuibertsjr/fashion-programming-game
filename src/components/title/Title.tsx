import React from 'react';
import s from './title.module.less';

export const Title = (props: ITitleProps): JSX.Element => {
    let suffex: JSX.Element;

    if (!props.suffex) {
        return (
            <div className={s.appTitle}>
                <h1> Dresscode </h1>
            </div>

        )
    }

    suffex = props.suffex;

    return (
        <div className={s.appTitle}>
            <h1> Dresscode </h1>
            {suffex}
        </div>
    );
};