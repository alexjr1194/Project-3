import React, {Component} from 'react';
import axios from 'axios';

class CharityActive extends Component {
  state = {
    donation: {}
  }

  componentDidMount() {
    this.getDonation();
  }

  getDonation = () => {
    const donationId = this.props.match.params.donation;
    axios.get(`/api/donation/activedonation/${donationId}`)
      .then(result => {
        const donation = result.data;
        console.log(result)
        this.setState({donation: donation});
      })
  }

  render() {
    return(
      <div>
        <div className="row ">
          <div className="col-12">
            <h2>{this.state.donation.donation_description}</h2>
          </div>
          <div className="col-12">
            <h3>{this.state.donation.date}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default CharityActive;
