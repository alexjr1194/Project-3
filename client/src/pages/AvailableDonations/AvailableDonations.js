import React, {Component} from 'react';
import axios from 'axios';

class AvailableDonations extends Component {
  state = {
    availableDonations: [],
    chosenDonation: "",
    charity: ""
  }
  componentDidMount() {
    this.getAvailableDonations();
  }

  getAvailableDonations = () =>{
    const charity = this.props.match.params.id
      axios.get(`/api/donation/${charity}/available`)
        .then(results => {
          console.log(results);
          const available = results.data;
          this.setState({availableDonations:available, charity: charity})
        })
    }

  donationEventHandler = (event) =>{
    const donationId = event.target.getAttribute("data-id");
    console.log("before state", donationId);
    this.setState({chosenDonation: donationId}, ()=>{
      console.log("state", this.state.chosenDonation);
      this.updateAvailable();
    })

  }

  updateAvailable = () => {
    axios.put(`/api/donation/activedonation/${this.state.chosenDonation}`)
      .then(result => {
        this.props.history.push(`/charity/${this.state.charity}/activedonation/${this.state.chosenDonation}`)
      })
  }

  render() {
    const available = this.state.availableDonations.map(donation => {
      return(
        <div className="donationsDiv">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h3>{donation.name}</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-10 imgDiv">
                <img className="img-fluid donationImg" src={process.env.PUBLIC_URL+"/images/"+donation.photo}/>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h4>Prepared on: {donation.todayDate}, Shelf Life: {donation.shelfLife}</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h4>location: {donation.address}</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h4>Quantity: {donation.quantity}</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h4>ingredients: {donation.ingredients}</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h4>Additional info: {donation.shouldKnow}</h4>
            </div>
          </div>
          <div className="row justify-content-center buttonRow">
            <div className="homeButton col-8 btn btn-lg">
              <div data-id={donation._id} onClick={this.donationEventHandler}>Choose Donation</div>
            </div>
          </div>
        </div>
      )
    })
    return(
      <div className="container-fluid col-8 itemsContainer">
        {available}
      </div>
    )
  }
}

export default AvailableDonations;
