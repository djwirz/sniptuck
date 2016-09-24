const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Promise = require("bluebird");

const Snippet = require('./Models/snippet.js');

module.exports = {
  addSnippet: function(req, res) {
    const newSnippet = new Snippet({
      snippet: req.body.snippet
    });
    newSnippet.save(function (err) {
      if (err) {
        return console.log(err);
      }
      res.json(newSnippet);
    });
  }
}
