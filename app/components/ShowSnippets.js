import React, { Component } from 'react';
import { fetchSnippets, fetchSnippetsSuccess, fetchSnippetsFailure } from '../actions/fetchSnippets';

export default class ShowSnippets extends Component {

  componentWillMount() {
    fetchSnippets()
  }


  render() {
    return (
      <div>
        <h2>ShowSnippets</h2>
      </div>
    );
  }
}
