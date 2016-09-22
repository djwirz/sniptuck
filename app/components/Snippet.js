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
    //Need to preventDefault, because without it, once the user hits
    //enter or submit it would send an http request. This being a single
    //page app, that's not needed and handled in the front-end
    event.preventDefault();
    // Call our action, addSnippet, which will send a POST request to the api
    // see actions/addSnippet.js
    console.log('Line 30 in Snippet.js this.props: ', this.props)
    this.props.addSnippet(this.state);
    //Reset our form fields to empty
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
              placeholder="Snippet"
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
