import React, {useEffect, useState} from "react";
import {socket} from "@components/socket-client/SocketClient";
// import * as queryString from "querystring";


function SocketRooms() {
    // @ts-ignore
    const [room, setRoom] = useState('');
    // @ts-ignore
    const [users, setUsers] = useState('');


    useEffect(() => {

        // @ts-ignore
        setRoom(room);

        socket.emit('join', {room}, (error: any) => {
            if (error) {
                console.log(error);
            }
        });
    }, []);

    useEffect(() => {
        socket.on("roomData", ({users}: any) => {
            setUsers(users);
        });
    }, []);

    return (
        <div className="room-title">
                <h3>{room}</h3>
        </div>
    )
}
export default SocketRooms