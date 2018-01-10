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
        <div className="row">
          <div className="col-12">
            <h3>{donation.name}</h3>
            <img src={process.env.PUBLIC_URL+"/images/"+ donation.photo} />
            <p>{donation.todayDate}</p>
            <div className="btn btn-sm btn-success" data-id={donation._id} onClick={this.donationEventHandler}>Choose Donation</div>
          </div>
        </div>
      )
    })
    return(
      <div>
        {available}
      </div>
    )
  }
}

export default AvailableDonations;
