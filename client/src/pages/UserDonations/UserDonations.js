import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class UserDonations extends Component {

  state={
    user:null,
    donations: null
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () =>{
    const user = this.props.match.params.id;
    this.setState({user: user})
    axios.get(`/api/donor/populate/${user}`)
      .then(response =>{
      console.log(response.data)
      this.setState({donations: response.data[0].donations}, ()=>console.log(this.state.donations))
    })
  }

  render(){
    return (
      <div>test</div>
    )
  }
}

export default UserDonations;
