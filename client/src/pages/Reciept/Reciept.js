import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Reciept.css'

class Reciept extends Component {
  state = {
    donationNumber: null,
    user: null,
    donationId: null
  }

  componentDidMount() {
    this.getParams();
  }

  getParams() {
    const user = this.props.match.params.id;
    const donationId = this.props.match.params.number;
    this.setState({user: user, donationId: donationId});
    this.getDonationNumber();
  }

  getDonationNumber() {
    let user = this.props.match.params.id;
    axios.get(`/api/donor/populate/${user}`)
      .then((response) => {
        console.log(response.data[0])
        const donationNumber = response.data[0].donations.length;
        console.log("populated donor :", donationNumber);
        this.setState({donationNumber: donationNumber}, ()=>console.log(this.state.donationNumber, this.state.user, this.state.donationId));
      })
      .catch(err => console.log(err));
  }

  render() {
    const user = this.state.user;
    const donationId = this.state.donationId;
    return (
      <div className="container col-12">
        <div className="row justify-content-center receiptRow">
          <h2>Thank You {this.state.user}</h2>
        </div>
        <div className="row justify-content-center receiptRow">
          <h4>for donation number {this.state.donationNumber} </h4>
        </div>
        <div className="row justify-content-center">
          <div className="row col-12 justify-content-center buttonRow">
            <div className="homeButton col-6 text-center">
              <Link to={"/user/" + user} className="btn btn-lg">Home</Link>
            </div>
          </div>
          <div className="row col-12 justify-content-center buttonRow">
            <div className="homeButton col-6 text-center">
                <Link to={"/user/" +user+ "/donations/activedonation/"+donationId} className="btn btn-lg">Track Donation</Link>
            </div>
          </div>
          <div className="row col-12 justify-content-center buttonRow">
            <div className="homeButton col-6 text-center">
              <Link to={"/user/"+user+"/donations/userdonations"} className="btn btn-lg">View All Donations</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Reciept;
