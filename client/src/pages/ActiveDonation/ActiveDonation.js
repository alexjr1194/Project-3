import React, {Component} from 'react';
import axios from 'axios';

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
      <div>
        <div className="row">
          <div className="col-12">
            <h1>{this.state.activeDonation.donation_description}</h1>
            <h3>{this.state.activeDonation.status}</h3>
          </div>
        </div>
      </div>
    )
  }

}

export default ActiveDonation;
