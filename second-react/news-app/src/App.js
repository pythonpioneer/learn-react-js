import './App.css';
import { Routes, Route } from 'react-router-dom';
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
      category: event.currentTarget.textContent,
    })
  }

  // function to change home-category
  handleHomeCategory = (event) => {
    this.setState({
      category: "general",
    })
  }

  render() {
    return (
      <>
        <Navbar handleCategory={this.handleCategory} handleHomeCategory={this.handleHomeCategory} />
        <Routes>

        {/* the key is mentioned below is to reload the page */}
          <Route
            exact path={"/" + this.state.category}
            element={<News key={this.state.category} pageSize={18} category={this.state.category}
            />} />
        </Routes>
      </>
    )
  }
}
