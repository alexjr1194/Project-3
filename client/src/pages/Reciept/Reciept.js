import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

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
      <div>
        <div className="container-fluid col-8 itemsContainer">
          <div className="row justify-content-center receiptRow">
            <div className="col-12 text-center">
              <h2>Thank You {this.state.user}</h2>
            </div>
          </div>
          <div className="row justify-content-center receiptRow">
            <div className="col-12 text-center">
              <h4>for donation number {this.state.donationNumber} </h4>
            </div>
          </div>

          <div className="row justify-content-center buttonRow">
            <div className="homeButton col-8 btn btn-lg">
              <Link to={"/user/" + user}>Home</Link>
            </div>
          </div>
          <div className="row justify-content-center buttonRow">
            <div className="homeButton col-8 btn btn-lg">
              <Link to={"/user/" +user+ "/donations/activedonation/"+donationId}>Track Donation</Link>
            </div>
          </div>
          <div className="row justify-content-center buttonRow">
            <div className="homeButton col-8 btn btn-lg">
              <Link to={"/user/"+user+"/donations/userdonations"}>View All Donations</Link>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Reciept;
