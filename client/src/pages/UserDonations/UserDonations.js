import React, {Component} from 'react';
import axios from 'axios';
import './UserDonations.css'

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
        <div className="donationsDiv col-md-8">
          <div className="row donationRow">
            <div className="col-12 donation">
              <h4 className="col-5">{donation.name}</h4>
              <div className="col-12 imgDiv">
                <img className="img-fluid donationImg" src={process.env.PUBLIC_URL+"/images/"+donation.photo}/>
              </div>
            </div>
          </div>
          <div className="row donationRow">
            <div className="col-12 donation">
              <p className="col-12">{donation.preparedOn}</p>
            </div>
          </div>
          <div className="row donationRow">
            <div className="col-12 donation">
              <p className="col-12">{donation.location}</p>
            </div>
          </div>

        </div>
      )
    })
    return (
      <div className="row justify-content-center" >
        <div className="row titleRow col-md-8">
          <div className="col-12 text-center">
            <h2>All donations for {this.state.user}</h2>
          </div>
        </div>
        {userDonations}
        <div className="row col-12 justify-content-center buttonRow">
          <div className="homeButton col-6 text-center">
            <Link to={"/user/" + this.state.user} className="btn btn-lg">Home</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDonations;
