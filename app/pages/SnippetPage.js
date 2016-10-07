import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SnippetContainer from '../containers/SnippetContainer.js';
import Header from '../components/Header.js';

class Snippet extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
        <SnippetContainer />
        </div>
      </div>
    );
  }
}

export default Snippet;
