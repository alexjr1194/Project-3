import React, {Component} from 'react';
import DonationForm from '../../components/DonationForm/DonationForm.js'
import axios from 'axios';

class Donate extends Component {

  state = {
    user: null,
    userId:null,
    donation:{}
  }

componentDidMount () {
  this.getUser();
}

 getUser = () =>{
   const user=this.props.match.params.id;
   this.setState({user: user});
   axios.get(`/api/donor/${user}`)
     .then((response) => {
       const userId = response.data[0]._id;
       this.setState({userId: userId});
     })
     .catch(err => console.log(err));
 }

 getDonation = (event) => {
   const state = this.state;
   state.donation[event.target.name] = event.target.value;
   this.setState(state.donation);
 }

 submitForm = () => {
   const creator = this.state.userId;
   let donation = {_creator: creator, ...this.state.donation}
   console.log("test",donation);
   axios.post('/api/donation', donation)
    .then((response) => {
      console.log("submitted");
      console.log(response);
    })
    .catch((err)=>console.log(err));
 }

  render(){
    return (
      <div>
        <h1>{this.state.user} make a donation!</h1>
        <div>
          <DonationForm getDonation={this.getDonation} submitForm={this.submitForm}/>
        </div>
        <p>{this.state.donation.donation_description}</p>
      </div>
    )
  }
}

export default Donate;
