import React, {Component} from 'react';
import {Input, FormBtn} from '../../components/Form';
import axios from 'axios';

class CharitySignUp extends Component {
  state = {
    name: '',
    org_id_number: '',
    address: '',
    phone_number: '',
    email: '',
    password: ''
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state, ()=>console.log(this.state));
  }

  onSubmit = (e) => {
    e.preventDefault();
    const data = this.state;
    console.log(data);
    axios.post('/api/createcharity', data)
      .then((result) => {
        console.log(result.data);
      });
  }

  getCharity =()=>{
    axios.get(`/api/charity/${this.state.charityName}`)
      .then(result =>{
        console.log(result);
        if(!result.data[0]){
          this.props.history.push("/")
        }else {
          if(result.data[0].email === this.state.email && result.data[0].password === this.state.password){
            this.props.history.push(`/charity/${this.state.username}`)
          }else {
          this.props.history.push("/")
          }
        }

      })
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <h1>Sign-Up</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <form onSubmit={this.onSubmit}>
              <label htmlFor='name'>Charity Name: </label>
              <Input
                id='name'
                name='name'
                placeholder='Charity Name (Required)'
                onChange={this.onChange}
              />
              <label htmlFor='org_id_number'>Organization Id: </label>
              <Input
                id='org_id_number'
                name='org_id_number'
                placeholder='Organization Id (Required)'
                onChange={this.onChange}
              />
              <label htmlFor='address'>Address: </label>
              <Input
                id='address'
                name='address'
                placeholder='420 Stone Dr, Medocino (Required)'
                onChange={this.onChange}
              />
              <label htmlFor='phone_number'>Phone Number:</label>
              <Input
                id='phone_number'
                name='phone_number'
                placeholder='(510)123-4567 (Required)'
                onChange={this.onChange}
              />
              <label htmlFor='email'>Email: </label>
              <Input
                id='email'
                name='email'
                placeholder='example@example.com (Required)'
                onChange={this.onChange}
              />
              <label htmlFor='passwordpassword'>Password: </label>
              <Input
                id='password'
                name='password'
                type='password'
                placeholder='*******'
                onChange={this.onChange}
              />
              <button onClick={this.getCharity}>Sign-Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CharitySignUp;
