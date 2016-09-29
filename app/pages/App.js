import React, { Component, PropTypes } from 'react';

import Header from '../components/Header.js';
import AppContainer from '../containers/AppContainer'

class App extends Component {
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

export default App;
