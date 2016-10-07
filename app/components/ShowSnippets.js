import React, { PropTypes, Component } from 'react'

export default class Snippets extends Component {
  render() {
    return (
      <ul>
        {this.props.snippets.snippets.map((snippet, i) =>
          <li key={i}>{snippet.title}</li>
        )}
      </ul>
    )
  }
}

Snippets.propTypes = {
  snippets: PropTypes.array.isRequired
}
