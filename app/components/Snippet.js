import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Snippet extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    snippet: PropTypes.number.isRequired
  };

  render() {
    const { increment, decrement, snippet } = this.props;
    return (
      <div>
        <div>
          {snippet}
        </div>
        <div>
          <button onClick={increment}>
            Plus
          </button>
          <button onClick={decrement}>
            Minus
          </button>
        </div>
      </div>
    );
  }
}

export default Snippet;
