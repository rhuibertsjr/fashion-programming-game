import React, {PureComponent} from "react";
import socketIo from 'socket.io-client';
import './share.module.less'

import EditorContainer from '../editor-container/EditorContainer';


// Connection met Socket.io via server.
// Call to the server
const ENDPOINT = 'http://127.0.0.1:3000';
const socket = socketIo(ENDPOINT);

class ShareContainer extends PureComponent {

    Obj: any;

    constructor(props: any) {
        super(props);
        // @ts-ignore
        this.Obj = new EditorContainer;
    }

    private getData = () => {

        let usersCode = this.Obj;
        usersCode = usersCode.onRunEventHandler();
        // console.log(usersCode);

        socket.emit("share code", 'hello ' + socket.id);

        socket.emit('share code', this.getData);

        //Sending the function, but only off there own code
        //@TODO: GET THE CODE FROM EDITOR!! AND THEN SEND IT!!
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