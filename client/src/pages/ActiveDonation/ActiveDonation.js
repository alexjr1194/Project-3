import React, {Component} from 'react';
import axios from 'axios';
import './ActiveDonation.css';

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
      <div className="col-12">
        <div className="row justify-content-center">
          <div className="col-8">
            <h4 className="">Current Donation: {this.state.activeDonation.name}</h4>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <img className="donationImg" src={process.env.PUBLIC_URL+"/images/"+this.state.activeDonation.photo}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <h3>Status: {this.state.activeDonation.status}</h3>
          </div>
        </div>
      </div>
    )
  }

}

export default ActiveDonation;
