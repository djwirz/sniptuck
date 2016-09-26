import React, { Component, PropTypes } from 'react';

import Header from '../components/Header.js';
import AppContainer from '../containers/AppContainer'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <Header />
        <AppContainer>
          {this.props.children}
        </AppContainer>
      </div>
    );
  }
}
