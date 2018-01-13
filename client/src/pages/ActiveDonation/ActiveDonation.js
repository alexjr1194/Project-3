import React, {Component} from 'react';
import axios from 'axios';
import ChatClient from '../../components/chatClient'

class ActiveDonation extends Component {
  state = {
    activeDonation: {}
  }

  componentDidMount() {
    this.getActiveDonation();
  }

  getActiveDonation = () => {
    const donationId = this.props.match.params.donationid;
    axios.get(`/api/donation/activedonation/${donationId}`)
      .then(response => {
        this.setState({activeDonation: response.data}, () => console.log(this.state.activeDonation));
      })
  }
  render() {
    return (
      <div className="container-fluid col-8 itemsContainer">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="">Current Donation: {this.state.activeDonation.name}</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 imgDiv">
            <img className="donationImg" src={process.env.PUBLIC_URL+"/images/"+this.state.activeDonation.photo}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h4>Status: {this.state.activeDonation.status}</h4>
          </div>
        </div>
        <ChatClient />
      </div>
    )
  }

}

export default ActiveDonation;
