import React, { Component } from 'react';

class donationsMade extends Component {
  state = {
    donations: 'donations'
  }
  render () {
    return (
      <div>
        <Nav />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <h1>{this.state.donations}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default donationsMade;
