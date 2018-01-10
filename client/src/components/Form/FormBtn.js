import React from 'react';

export const FormBtn = props =>
  <button {...props} type='submit' style={{float: 'right'}} className='btn btn-success'>
    {props.children}
  </button>
