import React, { Component } from 'react';
import Manage from '../components/Manage';
import Header from '../components/Header.js';

class ManagePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Manage />
      </div>
    );
  }
}

export default ManagePage;
