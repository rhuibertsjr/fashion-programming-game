import React, {PureComponent} from "react";

import socketIo from 'socket.io-client';

import onRunEventHandler from '../editor-container/EditorContainer';

// Connection met Socket.io via server.

// Call to the server
const ENDPOINT = 'http://127.0.0.1:3000';

const socket = socketIo(ENDPOINT);
// console.log(onRunEventHandler);
// @ts-ignore
const user_code = onRunEventHandler;
// console.log(user_code);

class LobbyContainer extends PureComponent {

    public getdata = (): void => {
        const user_code = onRunEventHandler;

        console.log(user_code);

    }

    public render() {
        return (
            <div className="shareCodeDiv">
                <button onClick={this.getdata}>Share </button>
            </div>
        );
    }
}

export {LobbyContainer, socket}