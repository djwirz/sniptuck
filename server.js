import express from 'express';
import path from 'path';
const bodyParser = require('body-parser');
const app = express();

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

app.use(webpackHotMiddleware(compiler));

const Controller = require('./Database/controller.js');
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/sniptuck');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'No Mongo for you'));
db.once('open', () => {console.log('A flock of Mongeese are forming the flying V');  });

app.post('/dist/api/snippet', Controller.addSnippet);

app.get('/dist/api/snippet', Controller.fetchSnippets);

const server = app.listen(PORT, 'localhost', err => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('Stopping dev server');
  wdm.close();
  server.close(() => {
    process.exit(0);
  });
});
