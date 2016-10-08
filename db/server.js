var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var Controller = require('./Database/controller');
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/sniptuck');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'No Mongo for you'));
db.once('open', () => {console.log('A flock of Mongeese are forming the flying V');  });

app.post('/dist/api/snippet', Controller.addSnippet);

app.get('/dist/api/snippet', Controller.fetchSnippets);

app.put('/dist/api/snippet', Controller.updateSnippet);

app.delete('/dist/api/snippet', Controller.deleteSnippet);

const PORT = 3000;
const server = app.listen(PORT, 'localhost', err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
