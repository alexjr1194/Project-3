import React, { Component } from 'react';
import Nav from '../../components/DonateNav';
import {Link} from 'react-router-dom';

class donationsMade extends Component {
  state= {
    donations: {
      _creator: {type: Schema.Types.ObjectId, ref: "Donation"}
      date: "12/21/2017",
      donation_description: "Ham and Eggs",
      quantity: "3",
      prepared_time: "01:00 P.M.",
      shelf_life: "2hrs",
      ingredients: "ham and eggs",
      location: "2141 Eunice St. Berkeley, CA 94709",
      photo_url: "images/hamandeggs.jpg"
      }
    }

  componentDidMount(){
    this.getUser();
  }

  getUser(){
      const donations = this.props.match.params.id;
      this.setState ({donations: donations})
  }

  render () {
    return (
      <div>
        <Nav />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <h1>You donated {this.state.donation.donation_description} on {this.state.donation.date}</h1>
              <h2>Donation Details:</h2>
              <h3>Quantity: {this.state.donation.quantity}</h3>
              <h3>Prepared On: {this.state.donation.prepared_time}</h3>
              <h3>Shelf Life: {this.state.donation.shelf_life}</h3>
              <h3>ingredients: {this.state.donation.ingredients}</h3>
              <h3>Locations: {this.state.donation.location}</h3>
              <h3>Check out the photo @ {this.state.donation.photo_url}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default donationsMade;