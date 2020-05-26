import React, {PureComponent} from "react";
import {socket} from "@components/socket-client/SocketClient";
import s from './chat.module.less';
import SocketRooms from "@components/socket-client/socket-rooms/SocketRooms";


// @ts-ignore
class SocketChat extends PureComponent<{}, {msg: string, chat: any}>{

    constructor(props: any) {
        super(props);
        this.state = { msg: "", chat: []}
    }

    componentDidMount() {
        // @ts-ignore
        socket.on("chat message", ({ id, msg }) => {
            this.setState({
                chat: [...this.state.chat, { id, msg }]
            });
        });
    }

    onTextChange = (e: any)=> {
        this.setState({ msg: e.target.value });
    };

    onMessageSubmit = () => {
        socket.emit("chat message", this.state.msg);
        this.setState({ msg: "" });
    };

    private renderChat() {
        /*
           @TODO: check if it comes from the user and then give it
                a different styling.
         */
        // let isCurrentUser = false;
        // if (!isCurrentUser) {
        //     isCurrentUser = true;
        // }

        const { chat } = this.state;
        return chat.map(({ id, msg }: any, idx: any) => (
            <div key={idx}>
                <div className={s.usernameDiv}>{id}</div>
                <div className={s.messageDiv}>{msg}</div>
            </div>

        ));
    }

   public render() {
        // The title is possible
       return (
           <div>
               <div style={{paddingLeft: '45%'}}>
                   <SocketRooms />
               </div>
               <div className={s.chatContainerDiv}>{this.renderChat()}</div>
               <br/>
               <div className={s.inputContainerDiv}>
                   <textarea
                       className={s.inputField}
                       onChange={e => this.onTextChange(e)}
                       value={this.state.msg} rows={11}
                       placeholder="Hier kan je type..."
                       spellCheck={"true"}
                   />
                   <button className={s.versturenButton} onClick={this.onMessageSubmit}>Versturen</button>
               </div>
           </div>
       );
   }
}
 // @ts-ignore
export default SocketChat