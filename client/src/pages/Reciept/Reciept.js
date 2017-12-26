import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Reciept extends Component {
  state = {
    donationNumber: "",
    user: ""

  }

  componentDidMount() {
    this.getParams();  
  }

  getParams() {
    const user = this.props.match.params.id;
    const donationNumber = this.props.match.params.number;
    this.setState({donationNumber: donationNumber, user: user});
  }

  render() {
    return (
    <div className="container col-12">
      <div className="row justify-content-center">
        <h2>Thank You</h2>
      </div>
      <div className="row justify-content-center">
        <h4>for donation number {this.state.donationNumber} </h4>
      </div>
      <div className="row justify-content-center">
        <Link to="/user/{this.state.user}" className="btn btn-lg btn-success">Home</Link>
        <Link to="/donations/user/{this.state.user}/:donation_id" className="btn btn-lg btn-danger">Track Donation</Link>
        <Link to="/donations/user/{this.state.user}/" className="btn btn-lg btn-success">View All Donations</Link>
      </div>
    </div>
  )
  }

}

export default Reciept;
