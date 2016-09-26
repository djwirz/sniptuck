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
    //As user types in snippet input, update the state
    //Once state updates the input value is updated to match the state
    this.setState({ snippet: event.target.value })
  }

  onFormSubmit(event){
    //Need to preventDefault
    //default is sending an http request
    //why use react if we are going to render after the request
    event.preventDefault();
    // addSnippet -> POST request to the api(actions/addSnippet.js)
    this.props.addSnippet(this.state);
    //Reset entry
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
