import React from 'react';
import s from './title.module.less';
import {Link} from "react-router-dom";

export const Title = (props: ITitleProps): JSX.Element => {
    let suffex: JSX.Element;

    if (!props.suffex) {
        return (
            <div className={s.appTitle}>
	            <Link to="/">
		            <h1> Dresscode </h1>
	            </Link>
            </div>

        )
    }

    suffex = props.suffex;

    return (
        <div className={s.appTitle}>
            <Link to="/">
	            <h1> Dresscode </h1>
            </Link>
            {suffex}
        </div>
    );
};