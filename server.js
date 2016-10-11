import express from 'express';
import path from 'path';
const bodyParser = require('body-parser');
const uriUtil = require('mongodb-uri');
const app = express();
//const cors = require('cors');

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.development';
const compiler = webpack(config);

const PORT = process.env.PORT || 8080;

const wdm = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
});

app.use(wdm);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(cors());


const mongodbUri = 'mongodb://sniptuck:sniptuck@ds053186.mlab.com:53186/sniptuck';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);


const Controller = require('./Database/controller.js');
const mongoose = require("mongoose");
//mongoose.connect('mongodb://ds053186.mlab.com:53186/sniptuck',{user:'sniptuck', pass:'sniptuck', auth: {authdb:'sniptuck'}});

const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'No Mongo for you'));
// db.once('open', () => {console.log('A flock of Mongeese are forming the flying V');  });

app.post('/snippet', Controller.addSnippet);

app.get('/snippet', Controller.fetchSnippets);
app.post('/snippet/id', Controller.fetchSnippet);

app.put('/snippet', Controller.updateSnippet);

app.delete('/snippet', Controller.deleteSnippet);

const server = app.listen(PORT, 'localhost', err => {
  if (err) {
    console.error(err);
    return;
  }
  // mongoose.connect('mongodb://ds053186.mlab.com:53186/sniptuck',{user:'sniptuck', pass:'sniptuck', auth: {authdb:'sniptuck'}});
  mongoose.connect(mongooseUri);
  db.on('error', console.error.bind(console, 'No Mongo for you'));
  db.once('open', () => {console.log('A flock of Mongeese are forming the flying V');  });

  console.log(`Listening at http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('Stopping dev server');
  wdm.close();
  server.close(() => {
    process.exit(0);
  });
});
