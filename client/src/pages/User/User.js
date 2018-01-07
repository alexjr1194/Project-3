import React, { Component } from 'react';
//import Nav from '../../components/Nav';
import {Link} from 'react-router-dom';
import './User.css';

class User extends Component {
  state= {
    user: {
      name: 'Jonh Appleseed',
      src:''
    },
    active: ''
  }

  componentDidMount(){
    this.getUser();
  }

  getUser(){
    const user = this.state.user;
    user.name = this.props.match.params.id;
    this.setState ({user: user})
  }

  render () {
    return (
      <div>

        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 text-center'>
              <h3>Welcome Back {this.state.user.name}</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="homeButton col-6 text-center">
              <Link to={"/user/"+this.state.user+"/donations"} className="btn btn-lg">Make A Donation!</Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="homeButton col-6 text-center">
              <Link to={"/user/"+this.state.user+"/donations/activedonation/"+this.state.active} className="btn btn-lg">View Active Donation</Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="homeButton col-6 text-center">
              <Link to={"/user/"+this.state.user+"/donations/userdonations"} className="btn btn-lg">View Your Donations</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
