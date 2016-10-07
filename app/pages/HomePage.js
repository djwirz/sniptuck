import React, { Component } from 'react';
import Home from '../components/Home';
import Header from '../components/Header.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default HomePage;
