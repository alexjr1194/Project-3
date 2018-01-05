import React, {Component} from 'react';
import { Input, FormBtn } from "../../components/Form";

class SignUp extends Component {

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
            <form method='post' action='/signup'>
              <label for='firstName'>First Name: </label>
              <Input
                name='firstName'
                placeholder='John (Required)'
              />
              <label for='lastName'>Last Name:</label>
              <Input
                name='lastName'
                placeholder='Appleseed (Required)'
              />
              <label for='email'>Email: </label>
              <Input
                name='email'
                type='email'
                placeholder='example@example.com (Required)'
              />
              <label for='DOB'>DOB: </label>
              <Input
                name='DOB'
                type='date'
                placeholder='12/12/94(Required)'
              />
              <label for='location'>Location:</label>
              <Input
                name='location'
                placeholder='420 Stone Dr Medocino, CA 98403'
              />
              <label for='id'>Id #: </label>
              <Input
                name='id'
                placeholder='N2342342342'
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
