import React, {useEffect, useState} from "react";
import {socket, ENDPOINT} from "@components/socket-client/SocketClient";
import queryString from "query-string";

// import './room.module.less';

function SocketRooms() {
    const [room, setRoom] = useState('');
    // @ts-ignore
    const [users, setUsers] = useState('');

    useEffect(() => {
        const {room} = queryString.parse(location.search);
        // @ts-ignore
        setRoom(room);
        socket.emit('join', {room}, (error: any) => {
            if (error) {
                console.log(error);
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on("roomData", ({users}: any) => {
            setUsers(users);
        });
    }, []);


    return (
        <div>
                <div>{room}</div>
        </div>
    )
}
export default SocketRooms