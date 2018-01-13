import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class User extends Component {
  state= {
    user: {
      name: '',
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
    axios.get(`/api/donor/${user.name}`)
      .then(result =>{
        console.log(result);
        const active = result.data[0].donations[result.data[0].donations.length-1];
        console.log(active);
        this.setState({active: active})
      })
    this.setState ({user: user})
  }

  render () {
    return (
      <div>

        <div className='container-fluid col-8 itemsContainer'>
          <div className='row justify-content-center'>
            <div className='col-12 text-center'>
              <h3>Welcome Back {this.state.user.name}</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="homeButton col-8 btn btn-lg">
              <Link to={"/user/"+this.state.user.name+"/donations"}>Make A Donation!</Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="homeButton col-8 btn btn-lg">
              <Link to={"/user/"+this.state.user.name+"/donations/activedonation/"+this.state.active}>View Last Donation</Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="homeButton col-8 btn btn-lg">
              <Link to={"/user/"+this.state.user.name+"/donations/userdonations"}>View Your Donations</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
