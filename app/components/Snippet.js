import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSnippet } from '../actions/addSnippet2';

import { MultiSelect, SimpleSelect } from 'react-selectize'

import Form from './Autocomplete';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/chaos';

const tagsList = require('../constants/tags')

class Snippet extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      tags: '',
      snippet: 'start state',
      user_id:''
    };
  }

  onTitleAdd(event){
    this.setState({ title: event.target.value })
  }

  onDescriptionAdd(event){
    this.setState({ description: event.target.value })
  }

  options = tagsList.tags.map(tag => {return {label: tag, value: tag}})

  onTagsAdd(values){
    let tag = values.forEach( value => value.value.value)
    this.setState({ tags: values })
  }

  onSnippetAdd(event){
    this.setState({ snippet: event })
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
      <aside>
        <ul>
          <li><input
              type="text"
              placeholder="Name......."
              value={this.state.title}
              onChange={this.onTitleAdd.bind(this)}
              /></li>
          <li><input
              type="text"
              placeholder="Description......."
              value={this.state.description}
              onChange={this.onDescriptionAdd.bind(this)}
              /></li>
          <li><MultiSelect
            options = {this.options}
            placeholder = "Select Tags"
            onValuesChange = {this.onTagsAdd.bind(this)}>
            </MultiSelect>
          </li>
          <li><button type="submit" >Save Snippet</button></li>
        </ul>
        </aside>
        <article>
        <AceEditor
          mode="javascript"
          theme="chaos"
          name="UNIQUE_ID_OF_DIV"
          editorProps={{$blockScrolling: true}}
          tabSize= {2}
          fontSize= {16}
          showGutter= {true}
          value={'//Type your Snippet here to begin the SnipTuck process'}
          onChange={this.onSnippetAdd.bind(this)}
        />
        </article>
        </form>
      </div>
    );
  }
}

export default Snippet;
