import React, { Component } from 'react';
import loading from '../icons/loading.gif';

export default class Loading extends Component {
  render() {
    return (
      <>
        <img src={loading} alt="loading" />
      </>
    )
  }
}

