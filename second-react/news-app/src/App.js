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
      searchText: "",
    }
  }

  // extracting search query from the input field
  /* Uncaught TypeError: Cannot read properties of undefined (reading 'setState')
    at getSearchQuery and this get solved by using arrow function
   */
  getSearchQuery = () => {

    this.setState({
      searchText: document.getElementById('search-box').value,
    });
  }

  // function to change categories
  handleCategory = (event) => {
    this.setState({
      category: event.currentTarget.textContent,
    })
  }

  // function to change home-category and getyournews category
  handleHomeCategory = (event) => {
    if (event.currentTarget.textContent === "GetYourNews") {
      this.setState({
        category: ""
      })
    }
    else this.setState({
      category: "general",
    })
  }


  render() {
    return (
      <>
        {console.log(this.state.searchText)}
        <Navbar handleCategory={this.handleCategory} handleHomeCategory={this.handleHomeCategory} getSearchQuery={this.getSearchQuery} />
        <Routes>

          {/* the key is mentioned below is to reload the page */}
          <Route
            exact path="/"
            element={<News key={this.state.category} pageSize={18} category={this.state.category} searchText={this.state.searchText}
            />} />
          <Route
            exact path={"/" + this.state.category}
            element={<News key={this.state.category} pageSize={18} category={this.state.category} searchText={this.state.searchText}
            />} />
        </Routes>
      </>
    )
  }
}
