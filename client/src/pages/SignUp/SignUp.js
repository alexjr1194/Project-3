import React, {Component} from 'react';
import { Input, FormBtn } from "../../components/Form";
import axios from 'axios';

class SignUp extends Component {
  state = {
    firstName: '' ,
    lastName: '' ,
    email: '' ,
    password: '' ,
    dob: '' ,
    location: '' ,
    id_number: '' ,
    phone_number: ''
  }

  onChange = (e) => {
    const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
  }

  onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { firstName, lastName, email, password, dob, location, id_number, phone_number} = this.state;

        axios.post('/api/donor', { firstName, lastName, email, password, dob, location, id_number, phone_number })
          .then((result) => {
            //access the results here....
            console.log(result);
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
              <label htmlFor='firstName'>First Name: </label>
              <Input
                id='firstName'
                name='firstName'
                placeholder='John (Required)'
                onChange={this.onChange}
              />
              <label htmlFor='lastName'>Last Name:</label>
              <Input
                id='lastName'
                name='lastName'
                placeholder='Appleseed (Required)'
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
              <label htmlFor='location'>Location:</label>
              <Input
                id='location'
                name='location'
                placeholder='420 Stone Dr Medocino, CA 98403'
                onChange={this.onChange}
              />
              <label htmlFor='id'>Id #: </label>
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
              <FormBtn>Sign-Up</FormBtn>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
