import React, { Component } from 'react';
import loading from '../icons/loading.gif';

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img style={{width: '5rem', height: '5rem'}} src={loading} alt="loading" />
      </div>
    )
  }
}

