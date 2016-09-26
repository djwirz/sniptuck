import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SnippetContainer from '../containers/SnippetContainer.js';

class Snippet extends Component {
  render() {
    return (
      <div className='container'>
      <SnippetContainer />
      </div>
    );
  }
}

export default Snippet;
