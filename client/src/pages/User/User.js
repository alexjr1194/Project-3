import React, { Component } from 'react';
import Nav from '../../components/Nav';
import {Link} from 'react-router-dom';

class User extends Component {
  state = {
    user: 'Jonh Appleseed'
  }

  componentDidMount(){
    this.getUser();
  }

  getUser(){
      const user = this.props.match.params.id;
      this.setState ({user: user})
  }

  render () {
    return (
      <div>
        <Nav />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <h1>{this.state.user}</h1>
            </div>
          </div>
          <div className="row ">
            <div className="col-12">
              <Link to={"/user/"+this.state.user+"/donations"} className="btn btn-lg btn-info">Make A Donation!</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
