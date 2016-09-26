import React, { Component } from 'react';
import { fetchSnippets, fetchSnippetsSuccess, fetchSnippetsFailure } from '../actions/fetchSnippets';

export default class Search extends Component {

  componentWillMount() {
    fetchSnippets()
  }


  render() {
    return (
      <div>
        <h2>Search</h2>
      </div>
    );
  }
}
