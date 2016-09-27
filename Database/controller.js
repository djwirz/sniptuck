const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  },

  fetchSnippets: function(req, res) {
    Snippet.find({}, function(err, snippets) {
      const snippetMap = [];
      snippets.forEach(function(snippet) {
        snippetMap.push(snippet.snippet);
      });
      res.send(snippetMap);
    });
  }
}
