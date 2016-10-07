import React, { Component, PropTypes } from 'react';

import AppContainer from '../containers/AppContainer'

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <AppContainer>
          {this.props.children}
        </AppContainer>
      </div>
    );
  }
}

export default App;
