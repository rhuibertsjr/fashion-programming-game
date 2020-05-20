import React, {useState} from "react";
import {Link} from "react-router-dom";

// import {socket} from "@components/socket-client/SocketClient";


function Rooms(){

    const [room, setRoom] = useState('');


        return (
            <div className="joinOuterDiv">
                <div className="joinInnerDiv">
                    <h1 className="header"> Join room</h1>
                    <br/> <br/> <br/>
                    <div>
                        <Link onClick={e => (!room) ? e.preventDefault() : null} to={`/werkplaats?room=${room}`}>
                            <button className='button' type="submit">Create room</button>
                        </Link><br/>
                        <input placeholder="Room" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} />
                    </div>
                </div>
            </div>
        );
}

export default Rooms
