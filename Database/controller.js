const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Snippet = require('./Models/snippet.js');

module.exports = {
  addSnippet: (req, res) => {
    const newSnippet = new Snippet({
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags,
      snippet: req.body.snippet,
      user_id:'',
    });
    newSnippet.save( err => {
      if (err) {
        return console.log(err);
      }
      res.json(newSnippet);
    });
  },

  fetchSnippets: (req, res) => {
    Snippet.find({}, (err, snippets) => {
      const snippetMap = [];
      snippets.forEach(snippet => { snippetMap.push(snippet);});
      res.send(snippetMap);
    });
  }
}
