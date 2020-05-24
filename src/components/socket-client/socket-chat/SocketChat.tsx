import React, {PureComponent} from "react";
import {socket} from "@components/socket-client/SocketClient";
import './chat.module.less';

// @ts-ignore
class SocketChat extends PureComponent<{}, {msg: string, chat: any}>{

    constructor(props: any) {
        super(props);
        this.state = {
            msg: "",
            chat: []
        };
    }

    componentDidMount() {
        // @ts-ignore
        socket.on("chat message", ({id}: number, {msg}: string) => {
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
        // @ts-ignore
        return chat.map(({id}: number,{msg}: string, idx) => (
            <div key={idx}>
                <span style={{color: "green"}}> {id}: </span>

                <span>{msg}</span>
            </div>
        ));
    }

   public render() {
       return (
           <div>
               <div className="chatContainerDiv">{this.renderChat()}</div>
               <textarea
                   className="inputField"
                   onChange={e => this.onTextChange(e)}
                   value={this.state.msg} rows={13}
                   placeholder="Hier kan je type..."/>
               <button className="versturenButton" onClick={this.onMessageSubmit}>Versturen</button>
           </div>
       );
   }
}
 // @ts-ignore
export default SocketChat