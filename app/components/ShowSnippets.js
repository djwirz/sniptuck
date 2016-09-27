import React, { Component } from 'react';

class ShowSnippets extends Component {

  componentWillMount() {
    this.props.fetchSnippets();
    console.log(this.props)
  }


  renderSnippets(snippets) {
    if( snippets ) {
      return snippets.map((snippet) => {
        return (
          <li className="list-group-item" key={snippet}>
          <h3 className="list-group-item-heading">{snippet}</h3>
          </li>
        );
      });
    }
    else {
      return (
        <li>nada</li>
      )
    }
  }


  render() {
    const { snippetsList } = this.props
    return (
      <div className="container">
        <h1>Snippets</h1>
        <ul className="list-group">
          {this.renderSnippets(snippetsList)}
        </ul>
      </div>
    );
  }
}

export default ShowSnippets;
