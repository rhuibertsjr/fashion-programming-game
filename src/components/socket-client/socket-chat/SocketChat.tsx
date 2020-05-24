import React, {PureComponent} from "react";
import {socket} from "@components/socket-client/SocketClient";
import './chat.module.less';

// @ts-ignore
class SocketChat extends PureComponent<{}, {msg: string, chat: any}>{

    constructor() {
        // @ts-ignore
        super();
        this.state = { msg: "", chat: [] };
    }

    componentDidMount() {
        // @ts-ignore
        socket.on("chat message", ({ id, msg }) => {
            console.log(msg);
            this.setState({
                chat: [...this.state.chat, { id, msg }]
            });
        });
    }

    onTextChange = (e: any)=> {
        console.log(this.state.msg);
        this.setState({ msg: e.target.value });
    };

    onMessageSubmit = () => {
        console.log(this.state.msg);
        socket.emit("chat message", this.state.msg);
        this.setState({ msg: "" });
    };

    renderChat() {
        const { chat } = this.state;
        console.log(this.state.msg);
        return chat.map(({ id, msg }: any, idx: any) => (
            <div key={idx}>
                <span style={{ color: "green" }}>{id}: </span>

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