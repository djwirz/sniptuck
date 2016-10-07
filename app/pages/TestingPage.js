import React, { Component } from 'react';
import Testing from '../components/Testing';
import LoginPage from '../components/login';
import Header from '../components/Header.js';

class TestingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <LoginPage />
      </div>
    );
  }
}

export default TestingPage;
