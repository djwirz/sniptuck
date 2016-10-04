import React, { Component } from 'react';
import { MultiSelect, SimpleSelect } from 'react-selectize'
const tagsList = require('../constants/tags')

export default class Form extends Component{

  constructor() {
    super();

    this.state = {tags: [].map(function(str){
      return {label: str, value: str};
    })};;
  };


    render() {
        self = this;
        return <MultiSelect

            values = {this.state.tags}
            valuesFromPaste = {function(options, values, pastedText){
                return pastedText
                    .split(",")
                    .filter(function(text){
                        var labels = values.map(function(item){
                            return item.label;
                        })
                        return labels.indexOf(text.toLowerCase()) == -1;
                    })
                    .map(function(text){
                        return {label: text, value: text};
                    });
            }}

            restoreOnBackspace = {function(item){
                return item.label;
            }}

            onValuesChange = {function(tags){
                self.setState({tags: tags});
            }}

            createFromSearch = {function(options, values, search){
                var labels = values.map(function(value){
                    return value.label;
                })
                if (search.trim().length == 0 || labels.indexOf(search.trim().toLowerCase()) != -1)
                    return null;
                return {label: search.trim().toLowerCase(), value: search.trim().toLowerCase()};
            }}

            renderNoResultsFound = {function(values, search) {
                return <div className = "no-results-found">
                    {function(){
                        if (search.trim().length == 0)
                            return "Type a few characters to create a tag";
                        else if (values.map(function(item){ return item.label; }).indexOf(search.trim().toLowerCase()) != -1)
                            return "Tag already exists";
                    }()}
                </div>
            }}
        />;
    }
};
