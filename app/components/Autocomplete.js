import React, { Component } from 'react';
import { MultiSelect, SimpleSelect } from 'react-selectize'
const tagsList = require('../constants/tags')

export default class Form extends Component{
    render(){
        var self = this,
            options = tagsList.tags.map(function(tag){
                return {label: tag, value: tag}
            });
        return <MultiSelect options = {options} placeholder = "Select fruits"></MultiSelect>
    }

};
