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
      <div className="container-fluid col-8 itemsContainer">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h2>Thank you for choosing</h2>
        </div>
      </div>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2>{this.state.donation.name}</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 imgDiv">
              <img className="img-fluid donationImg" src={process.env.PUBLIC_URL+"/images/"+this.state.donation.photo}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h4>Donated on: {this.state.donation.preparedOn}</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default CharityActive;
