import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Charity extends Component {

  state = {
    charity: {}
  }

  componentDidMount() {
    this.getCharity();
  }

  getCharity = () => {
    const charity = this.props.match.params.id;
      axios.get(`/api/charity/${charity}`)
        .then(results => {
          console.log(results);
          const charity = results.data[0];
          this.setState({charity: charity});
        })
    }

  render() {

    return (
      <div>
        <div className="container-fluid col-8 itemsContainer">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1>Welcome back: {this.state.charity.name}</h1>
            </div>
          </div>
          <div className="row justify-content-center" >
            <div className="homeButton btn btn-lg col-8">
              <Link to={"/charity/"+this.state.charity._id+"/availabledonations/"}>View Available Donations</Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="homeButton btn btn-lg col-8">
              <Link to="#">View Past Accepted Donations</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Charity;
