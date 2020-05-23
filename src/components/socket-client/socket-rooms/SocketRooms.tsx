import React, {useEffect, useState} from "react";
import {socket, ENDPOINT} from "@components/socket-client/SocketClient";
import queryString from "query-string";


function SocketRooms() {
    const [room, setRoom] = useState('');
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
        console.log(users);
    }, []);

    return (
        <div className="room-title">
                <div>{room}</div>
        </div>
    )
}
export default SocketRooms