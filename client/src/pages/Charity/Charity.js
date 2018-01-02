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
        <h1>Welcome {this.state.charity.name}</h1>
        <div className="col-12 row justify-content-center" >
          <div className="btn btn-lg btn-warning"><Link to={"/charity/"+this.state.charity._id+"/availabledonations/"}>View Available Donations</Link></div>
        </div>
        <div className="col-12 row justify-content-center">
          <div className="btn btn-lg btn-warning"><Link to="#">View Past Accepted Donations</Link></div>
        </div>
      </div>
    )
  }
}

export default Charity;
