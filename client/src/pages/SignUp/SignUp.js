import React, {Component} from 'react';
import { Input, FormBtn } from "../../components/Form";

class SignUp extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    fetch('/api/donor', {
      method: 'POST',
      body: data,
    });
  }

  // handlechange =(event) => {
  //   event.preventDefault();
  //   const data = {}
  //   data[event.target.name] = event.target.value;
  // }

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
            <form onSubmit={this.handleSubmit}>
              <label htmlFor='firstName'>First Name: </label>
              <input
                id='firstName'
                name='firstName'
                placeholder='John (Required)'
              />
              <label htmlFor='lastName'>Last Name:</label>
              <input
                id='lastName'
                name='lastName'
                placeholder='Appleseed (Required)'
              />
              <label htmlFor='email'>Email: </label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='example@example.com (Required)'
              />
              <label htmlFor='password'>Password: </label>
              <input
                id='password'
                name='password'
                type='password'
                placehold='***********'
              />
              <label htmlFor='DOB'>DOB: </label>
              <input
                id='DOB'
                name='DOB'
                type='date'
                placeholder='12/12/94(Required)'
              />
              <label htmlFor='location'>Location:</label>
              <input
                id='location'
                name='location'
                placeholder='420 Stone Dr Medocino, CA 98403'
              />
              <label htmlFor='id'>Id #: </label>
              <input
                id='id'
                name='id'
                placeholder='N2342342342'
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
