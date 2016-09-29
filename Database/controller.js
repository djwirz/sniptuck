const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Snippet = require('./Models/snippet.js');

module.exports = {
  addSnippet: (req, res) => {
    const newSnippet = new Snippet({
      snippet: req.body.snippet
    });
    newSnippet.save( err => {
      if (err) {
        return console.log(err);
      }
      res.json(newSnippet);
    });
  },

  fetchSnippets: const(req, res) {
    Snippet.find({}, const(err, snippets) {
      const snippetMap = [];
      snippets.forEach(const(snippet) {
        snippetMap.push(snippet.snippet);
      });
      res.send(snippetMap);
    });
  }
}
