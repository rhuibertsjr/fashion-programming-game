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
        // console.log(code);
        socket.emit("shareCode", 'hello ' + socket.id);

        //Sending the function, but only off there own code
        //@TODO: GET THE CODE FROM EDITOR!! AND THEN SEND IT!!
        socket.emit("shareCode", code + socket.id);

        //@TODO:  Make a function to send users code to each other
        // socket.on("shareCode", () => {
        //     console.log(code);
        // });
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