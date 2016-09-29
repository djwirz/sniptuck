import React from 'react';
import { Component } from 'react';

class App extends Component {
	componentWillMount() {
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
