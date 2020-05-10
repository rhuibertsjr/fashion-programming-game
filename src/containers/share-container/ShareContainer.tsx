import React, {PureComponent} from "react";
import socketIo from 'socket.io-client';

import onRunEventHandler from '../editor-container/EditorContainer';

import './share.module.less'
// Connection met Socket.io via server.
// Call to the server
const ENDPOINT = 'http://127.0.0.1:3000';
const socket = socketIo(ENDPOINT);

class ShareContainer extends PureComponent {

    private getData = () => {
        const code = onRunEventHandler;
        console.log(code);
        socket.on("shareCode", () => {
            console.log(code);
            console.log('message');
        });
        socket.emit("shareCode", 'Hello');
    }

    public render() {
        return (
            <div className="shareCodeDiv">
                <button onClick={this.getData}> Get Data</button>
            </div>
        );
    }
}

export {ShareContainer, socket}