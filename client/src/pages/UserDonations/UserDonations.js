import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class UserDonations extends Component {

  state={
    user:null,
    donations: []
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () =>{
    const user = this.props.match.params.id;
    this.setState({user: user})
    axios.get(`/api/donor/populate/${user}`)
      .then(response =>{
      console.log(response.data)
      this.setState({donations: response.data[0].donations}, ()=>console.log(this.state.donations))
    })
  }

  render(){
    const userDonations = this.state.donations.map(donation =>{
      return (
        <div className="row">
          <h4 className="col-12">{donation.donation_description}</h4>
          <p className="col-12">{donation.date}</p>
        </div>
      )
    })
    return (
      <div>
        {userDonations}
      </div>
    )
  }
}

export default UserDonations;
