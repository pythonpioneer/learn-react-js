import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  // setting state and categories
  constructor() {
    super();
    this.state = {
      category: "general",
      searchText: "",
      pageSize: 12,
      progress: 10,
    }
  };

  // setting the progress when api is getching the data
  setProgress = (prog=10) => {
    this.setState({
      progress: prog,
    })
  };

  // extracting search query from the input field
  /* Uncaught TypeError: Cannot read properties of undefined (reading 'setState')
    at getSearchQuery and this get solved by using arrow function
   */
  getSearchQuery = () => {
    this.setState({
      searchText: document.getElementById('search-box').value,
    })
  };

  // function to change categories
  handleCategory = (event) => {
    this.setState({
      category: event.currentTarget.textContent,
    });
  };

  // function to change home-category and getyournews category
  handleHomeCategory = (event) => {
    if (event.currentTarget.textContent === "GetYourNews") {
      this.setState({
        category: ""
      });
    }
    else this.setState({
      category: "general",
    });
  };


  render() {
    return (
      <>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar handleCategory={this.handleCategory} handleHomeCategory={this.handleHomeCategory} getSearchQuery={this.getSearchQuery} />
        <Routes>

          {/* the key is mentioned below is to reload the page */}
          <Route
            exact path="/search"
            element={<News key={this.state.category + "search"} pageSize={this.state.pageSize} category={this.state.category} searchText={this.state.searchText} setProgress={this.setProgress} newsApiKey={process.env.REACT_APP_NEWS_API_KEY}
            />} />
          <Route
            exact path={this.state.category === "general" ? "/" : "/" + this.state.category}
            element={<News key={this.state.category} pageSize={this.state.pageSize} category={this.state.category} searchText={this.state.searchText} setProgress={this.setProgress} newsApiKey={process.env.REACT_APP_NEWS_API_KEY}
            />} />
        </Routes>
      </>
    )
  }
}
