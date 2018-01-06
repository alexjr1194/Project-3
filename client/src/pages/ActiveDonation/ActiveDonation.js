import React, {Component} from 'react';
import axios from 'axios';
import io from "socket.io-client";
import ChatClient from '../../components/chatClient';

class ActiveDonation extends Component {
  state = {
    activeDonation: {}
  }

  componentDidMount() {
    this.getActiveDonation();
    //this.connectSocket();
  }

  // connectSocket = () => {
  //   let socket = io.connect('http://localhost:3001');
  //   socket.on('connect', (data)=>{
  //     console.log("socket connected");
  //     socket.emit("join", "hello from the client")
  //   })
  //   socket.on('test', data => {
  //     console.log(data);
  //   })
  // }

  getActiveDonation = () => {
    const donationId = this.props.match.params.donationid;
    axios.get(`/api/donation/activedonation/${donationId}`)
      .then(response => {
        this.setState({activeDonation: response.data}, () => console.log(this.state.activeDonation));
      })
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h1>{this.state.activeDonation.donation_description}</h1>
            <h3>{this.state.activeDonation.status}</h3>
            <ChatClient />
          </div>
        </div>
      </div>
    )
  }

}

export default ActiveDonation;
