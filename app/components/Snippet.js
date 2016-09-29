import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSnippet } from '../actions/addSnippet';

class Snippet extends Component {

  constructor(props) {
    super(props);

    this.state = {
        snippet: '',
    };
  }

  onSnippetAdd(event){
    this.setState({ snippet: event.target.value })
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.addSnippet(this.state);
    this.setState({
        snippet: '',
    });
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.onFormSubmit.bind(this)}>
          <input
              type="text"
              placeholder="Snippet......."
              value={this.state.snippet}
              onChange={this.onSnippetAdd.bind(this)}
              />
            <button type="submit" >Save Snippet</button>
        </form>
      </div>
    );
  }
}

export default Snippet;
