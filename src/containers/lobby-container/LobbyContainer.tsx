import React, {PureComponent} from "react";

import onRunEventHandler from '../editor-container/EditorContainer';

// Connection met Socket.io via server.
import socketIo from 'socket.io-client';
// Call to the server
const ENDPOINT = 'http://127.0.0.1:3000';

const socket = socketIo(ENDPOINT);
// console.log(onRunEventHandler);
// @ts-ignore
const user_code = onRunEventHandler;
console.log(user_code);
class LobbyContainer extends PureComponent{
    public render() {
        return (
            <div>

            </div>
        );
    }
}

export {LobbyContainer, socket};