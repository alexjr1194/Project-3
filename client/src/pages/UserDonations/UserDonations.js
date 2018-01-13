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
        <div className="donationsDiv">
          <div className="row justify-content-center">
            <div className="col-12 donation text-center">
              <h4>{donation.name}</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-10 imgDiv">
                <img className="img-fluid donationImg" src={process.env.PUBLIC_URL+"/images/"+donation.photo}/>
            </div>
          </div>
          <div className="row justify-content-center donationRow">
            <div className="col-12 donation">
              <h4>Prepared on: {donation.preparedOn}</h4>
            </div>
          </div>
          <div className="row justify-content-center donationRow">
            <div className="col-12 donation">
              <h4>Location: {donation.location}</h4>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <div className="container-fluid col-8 itemsContainer" >
          <div className="row titleRow jusify-content-center">
            <div className="col-12 text-center">
              <h2>All donations for {this.state.user}</h2>
            </div>
          </div>
          {userDonations}
          <div className="row justify-content-center buttonRow">
            <div className="homeButton col-8 btn btn-lg">
              <Link to={"/user/" + this.state.user}>Home</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDonations;
