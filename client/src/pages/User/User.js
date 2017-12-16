import React, { Component } from 'react';
import Nav from '../../components/Nav';

class User extends Component {
  state= {
    user: {
      name: 'Jonh Appleseed',
      src:''
    }
  }
  render () {
    return (
      <div>
        <Nav />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <h1>{this.state.user.name}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
