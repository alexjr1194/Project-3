import React, {Component} from 'react';
import io from "socket.io-client";

//let socket = io.connect('http://localhost:3001');

class ChatClient extends Component {

  state = {
    message: "",
    chatMessages : [],
    socket:null
  }

  componentDidMount() {
    this.connectSocket();

  }

  connectSocket = () => {

    let socket = io.connect('http://localhost:3001');
    socket.on('connect', (data)=>{
      console.log("socket connected");
      socket.emit("join", "hello from the client")
      socket.on('chat', msg => {
        const chatMessages = this.state.chatMessages;
        chatMessages.push(msg);
      })
    })
  }

  render() {
    const chats = this.state.chatMessages.map(message => {
      return (
        <li>
          <p>{message}</p>
        </li>
      )
    })

    return (
      <div>
      <ul id="messages">
        {chats}
      </ul>
      <form >
        <input id="m" name="message" autocomplete="off" /><button onClick={this.sendMessage}>Send</button>
      </form>
      </div>
    )
  }
}

export default ChatClient;
