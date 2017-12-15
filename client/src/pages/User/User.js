import React, { Component } from 'react';
import Nav from '../../components/Nav';

class User extends Component {
  state = {
    user: 'Jonh Appleseed'
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
        </div>
      </div>
    );
  }
}

export default User;
