import React from 'react';
import s from './title.module.less';
import SocketRooms from "@components/socket-client/socket-rooms/SocketRooms";

export const Title = (): JSX.Element =>
(
		<div className={s.appTitle}>
			<h1> Dresscode </h1>
			<SocketRooms />
		</div>

);