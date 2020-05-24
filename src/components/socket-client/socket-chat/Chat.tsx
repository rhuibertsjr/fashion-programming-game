import React, {PureComponent} from "react";
import {socket} from "@components/socket-client/SocketClient";


class Chat extends PureComponent<{}, {msg: string, chat: any}>{

    constructor(props: any) {
        super(props);
        this.state = {
            msg: "",
            chat: [],
        }
    }

    componentDidMount() {
        socket.on("chat message", ({id, msg}: any) => {
            this.setState({
                chat: [...this.state.chat, {id, msg}]
            })
        })
    }

    onTextChange = (e:any) => {
        this.setState({msg: e.target.value});
    }

    onMessageSubmit = () => {
        socket.emit("chat message", this.state.msg);
        this.setState({msg: ""})
    }


    private renderChat() {
        const {chat} = this.state;
        return chat.map(({id, msg}: any, idx: any) => [
            <div key={idx}>
                <span style={{color: "green"}}> {id}: </span>

                <span>{msg}</span>
            </div>
        ])
    }

   public render() {
       return (
           <div>
               <input onChange={e => this.onTextChange(e)} value={this.state.msg}/>
               <button onClick={this.onMessageSubmit}>Versturen</button>
                <div>{this.renderChat()}</div>
           </div>
       );
   }
}

export default Chat