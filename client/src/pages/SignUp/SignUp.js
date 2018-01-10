import React, {Component} from 'react';
import { Input, FormBtn } from "../../components/Form";

class SignUp extends Component {

  handleSubmit (event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(event.body);
    console.log(data.get('firstName'));
    fetch('/api/donor', {
      method: 'POST',
      body: {
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        password: data.get('password'),
        dob: data.get('DOB'),
        address: data.get('location'),
        id_number: data.get('id_number'),
        phone_number: data.get('phone_number')
      }
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
            <form onSubmit={this.handleSubmit.bind()}>
              <label htmlFor='firstName'>First Name: </label>
              <Input
                id='firstName'
                name='firstName'
                placeholder='John (Required)'
              />
              <label htmlFor='lastName'>Last Name:</label>
              <Input
                id='lastName'
                name='lastName'
                placeholder='Appleseed (Required)'
              />
              <label htmlFor='email'>Email: </label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='example@example.com (Required)'
              />
              <label htmlFor='password'>Password: </label>
              <Input
                id='password'
                name='password'
                type='password'
                placehold='***********'
              />
              <label htmlFor='DOB'>DOB: </label>
              <Input
                id='DOB'
                name='DOB'
                type='date'
                placeholder='12/12/94(Required)'
              />
              <label htmlFor='location'>Location:</label>
              <Input
                id='location'
                name='location'
                placeholder='420 Stone Dr Medocino, CA 98403'
              />
              <label htmlFor='id'>Id #: </label>
              <Input
                id='id_number'
                name='id_number'
                placeholder='N2342342342'
              />
              <label htmlFor='phone_number'>Id #: </label>
              <Input
                id='phone_number'
                name='phone_number'
                placeholder='(123)456-7890'
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
