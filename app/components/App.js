import React from 'react';
import { Component } from 'react';

export default class App extends Component {
	componentWillMount() {
    //this.props.something about authentiation
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
