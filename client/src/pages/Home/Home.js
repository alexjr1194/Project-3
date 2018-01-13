import React, {Component} from 'react';
import Nav from '../../components/Nav';
import { Input, FormBtn } from "../../components/Form";
import {Link} from 'react-router-dom';

class Home extends Component {
  state = {
    username: '',
    password: ''
  }

  hanldeInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }
  render () {
    return (
      <div>
        <div className="container-fluid col-8 itemsContainer">
          <div className="row justify-content-center">
            <div className="homeButton btn btn-lg col-8">
              <Link to="signin/donor">Donor Sign-in</Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="homeButton btn btn-lg col-8">
              <Link to="signin/charity">Charity Sign-in</Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="homeButton btn btn-lg col-8">
              <Link to="signup">Sign Up</Link>
            </div>
          </div>
        </div>




      </div>
    );
  }
}

export default Home;
