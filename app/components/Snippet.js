import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSnippet } from '../actions/addSnippet';

import { MultiSelect, SimpleSelect } from 'react-selectize'

import Form from './Autocomplete';

class Snippet extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      tags: '',
      snippet: '',
      user_id:''
    };
  }

  onTitleAdd(event){
    this.setState({ title: event.target.value })
  }

  onDescriptionAdd(event){
    this.setState({ description: event.target.value })
  }

  onTagsAdd(event){
    this.setState({ tags: event.target.value })
  }

  onSnippetAdd(event){
    this.setState({ snippet: event.target.value })
  }

  onUserAdd(event){
    this.setState({ snippet: event.target.value })
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.addSnippet(this.state);
    this.setState({
        title: '',
        description: '',
        tags: '',
        snippet: ''
    });
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.onFormSubmit.bind(this)}>
          <input
              type="text"
              placeholder="Name......."
              value={this.state.title}
              onChange={this.onTitleAdd.bind(this)}
              />
          <input
              type="text"
              placeholder="Description......."
              value={this.state.description}
              onChange={this.onDescriptionAdd.bind(this)}
              />
          <Form
            // value={this.state.tags}
            // onValuesChange = {tags => {self.setState({tags: tags})}}
          />
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
