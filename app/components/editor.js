import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/chaos';


export default class Editor extends Component{
  render(){
    return <AceEditor
    mode="javascript"
    theme="chaos"
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true}}
    />
  }
};
