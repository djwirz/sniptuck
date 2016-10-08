const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Snippet = require('./Models/snippet.js');

module.exports = {
  addSnippet: (req, res) => {
    console.log('-------------------------------------------------------------------------------------------------------------- controller line 8: ', req)
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
  },

  updateSnippet: (req, res) => {
    Snippet.findById(req.body._id, (err, snippet) => {
      console.log('line 33 in controller: ', snippet);
      if( !snippet ) return res.json({ message: 'unable to update something that does not exist' });
      if (err) res.send(err);
      (req.body.title) ? snippet.title = req.body.title : null;
      (req.body.description) ? snippet.description = req.body.description : null;
      (req.body.tags) ? snippet.tags = req.body.tags : null;
      (req.body.snippet) ? snippet.snippet = req.body.snippet : null;
      snippet.save(function(err) {
        if (err) res.send(err);
        res.json({ message: 'Snippet has been updated' });
      });
    });
  },

  deleteSnippet: (req, res) => {
    Snippet.find({ _id: req.body._id }).remove( err => {
      if (err) res.send(err);
      res.json({ message: 'Snippet has been deleted' })
    })
  }
}
