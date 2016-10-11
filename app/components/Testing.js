import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSnippet } from '../actions/updateSnippet';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/chaos';

const editorChange = (val) => console.log(val)

class Testing extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      tags: this.props.tags,
      snippet: this.props.snippet,
      user_id: this.props._id
    }
  }

  onSnippetUpdate(event){
    this.setState({ snippet: event })
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.updateSnippet(this.state);
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
        <h2>{this.state.title}</h2>
        <AceEditor
        mode="javascript"
        theme="chaos"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
        tabSize= {2}
        fontSize= {16}
        showGutter= {true}
        value={this.state.Snippet}
        onChange={editorChange}
        />
      </div>
    );
  }
}

export default Testing;
