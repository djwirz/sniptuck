import React, { Component } from 'react';
import ShowSnippets from '../containers/ShowSnippetsContainer';
import Header from '../components/Header.js';

class SearchPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <ShowSnippets />
      </div>
    );
  }
}

export default SearchPage;
