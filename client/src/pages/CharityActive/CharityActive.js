import React, {Component} from 'react';
import axios from 'axios';

class CharityActive extends Component {
  state = {
    donation: {},
    formattedAddress:''
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
        this.setState({donation: donation}, ()=>{
          this.formatLocationUrl();
        });
      })
  }

  formatLocationUrl = () => {
    const str = this.donation.address;
    let newstr = str.replace(" ", "%20");
    this.setState({formattedAddress: newstr});
  }

  render() {
    const loc = this.state.formattedAddress;
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
        <div className="row justify-content-center activeEnd">
          <div className="col-12 text-center">
            <h4>Donated on: {this.state.donation.preparedOn}</h4>
          </div>
        </div>
        <div className="row justify-content-center mapRow">
          <div className="col-10 googleMap">
            <iframe src={"//www.google.com/maps/embed/v1/place?q="+loc+"&zoom=17&key=AIzaSyCVa7Ko7-lr9216SR9RP2L4BKaZEsVktkA"}
                    width="600" height="450" frameBorder="0">
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default CharityActive;
