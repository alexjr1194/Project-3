import React, {Component} from 'react';
import { Input, FormBtn } from "../../components/Form";
import axios from 'axios';

class SignUp extends Component {
  state = {
    first_name: '' ,
    last_name: '' ,
    email: '' ,
    password: '' ,
    dob: '' ,
    address: '' ,
    id_number: '' ,
    phone_number: ''
  }

  onChange = (e) => {
    const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state, ()=>console.log(this.state));

  }

  onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        //const { first_name, last_name, email, password, dob, address, id_number, phone_number} = this.state;
        const data = this.state;
        console.log(data);
        axios.post('/api/createdonor', data)
          .then((result) => {
            //access the results here....
            console.log(result.data);
          });
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
              <label htmlFor='first_name'>First Name: </label>
              <Input
                id='first_name'
                name='first_name'
                placeholder='First name (Required)'
                onChange={this.onChange}
              />
              <label htmlFor='last_name'>Last Name:</label>
              <Input
                id='last_name'
                name='last_name'
                placeholder='Last name (Required)'
                onChange={this.onChange}
              />
              <label htmlFor='email'>Email: </label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='example@example.com (Required)'
                onChange={this.onChange}
              />
              <label htmlFor='password'>Password: </label>
              <Input
                id='password'
                name='password'
                type='password'
                placehold='***********'
                onChange={this.onChange}
              />
              <label htmlFor='dob'>DOB: </label>
              <Input
                id='dob'
                name='dob'
                type='date'
                placeholder='12/12/94(Required)'
                onChange={this.onChange}
              />
              <label htmlFor='address'>Address:</label>
              <Input
                id='address'
                name='address'
                placeholder='420 Stone Dr Medocino, CA 98403'
                onChange={this.onChange}
              />
              <label htmlFor='id'>Driver License #: </label>
              <Input
                id='id_number'
                name='id_number'
                placeholder='N2342342342'
                onChange={this.onChange}
              />
              <label htmlFor='phone_number'>Phone Number: </label>
              <Input
                id='phone_number'
                name='phone_number'
                placeholder='(123)456-7890'
                onChange={this.onChange}
              />
              <button>Sign-Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
