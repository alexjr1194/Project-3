import React, {Component} from 'react';
import axios from 'axios';
import ChatClient from '../../components/chatClient'

class ActiveDonation extends Component {
  state = {
    activeDonation: {},
    formattedAddress: ''
  }

  componentDidMount() {
    this.getActiveDonation();
  }

  getActiveDonation = () => {
    const donationId = this.props.match.params.donationid;
    axios.get(`/api/donation/activedonation/${donationId}`)
      .then(response => {
        this.setState({activeDonation: response.data}, () => {
          this.formatLocationUrl();
        });
      })
  }

  formatLocationUrl = () => {
    const str = this.state.activeDonation.address;
    let newstr = str.replace(" ", "%20");
    this.setState({formattedAddress: newstr});
  }

  render() {
    const loc = this.state.formattedAddress;
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
        <div className="row justify-content-center activeEnd">
          <div className="col-12 text-center">
            <h4>Status: {this.state.activeDonation.status}</h4>
          </div>
        </div>
        <div className="row justify-content-center mapRow">
          <div className="col-10 googleMap">
            <iframe src={"//www.google.com/maps/embed/v1/place?q="+loc+"&zoom=17&key=AIzaSyCVa7Ko7-lr9216SR9RP2L4BKaZEsVktkA"}
                    width="600" height="450" frameborder="0">
            </iframe>
          </div>
        </div>

      </div>
    )
  }

}

export default ActiveDonation;
