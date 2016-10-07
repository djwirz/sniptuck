import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/chaos';

const editorChange = (val) => console.log(val)

export default class Editor extends Component{
  render(){
    return <AceEditor
    mode="javascript"
    theme="chaos"
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true}}
    tabSize= {2}
    fontSize= {16}
    showGutter= {true}
    value={'//Type your Snippet here to begin the SnipTuck process'}
    onChange={editorChange}
    />
  }
};
