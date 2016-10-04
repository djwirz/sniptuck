import React, { Component } from 'react';
import { MultiSelect, SimpleSelect } from 'react-selectize'
const tagsList = require('../constants/tags')

export default class Form extends Component{
  render(){
    const options = tagsList.tags.map(tag => {return {label: tag, value: tag}});
    return <MultiSelect options = {options} placeholder = "Select Tags"></MultiSelect>
  }
};
