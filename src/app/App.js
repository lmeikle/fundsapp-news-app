import React, { Component } from 'react';
import NewsContainer from '../news/NewsContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NewsContainer />
      </div>
    );
  }
}

export default App;
