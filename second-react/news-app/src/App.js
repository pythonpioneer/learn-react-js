import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  // setting state and categories
  constructor() {
    super();
    this.state = {
      category: "general",
    }
  }

  // function to change categories
  handleCategory = (event) => {
    this.setState({
      category: event.currentTarget.textContent.toLowerCase(),
    })
  }

  render() {
    return (
      <>
      {console.log(this.state.category)}
        <Navbar handleCategory={this.handleCategory} />
        <News pageSize={18} category={this.state.category} />
      </>
    )
  }
}
