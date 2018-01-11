import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SignUpHome extends Component {

  render () {
    return (
      <div>
        <div className="container-fluid col-8">
          <div className="row justify-content-center">
            <div className="homeButton btn btn-lg col-8">
              <Link to="signup/donor">Donor Sign-up</Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="homeButton btn btn-lg col-8">
              <Link to="signup/charity">Charity Sign-up</Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="homeButton btn btn-lg col-8">
              <Link to="/">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpHome;
