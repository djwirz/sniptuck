const express = require('express')
const app = express()
const api = require('./api/api.js')
const config = require('./config/config.js')
require('mongoose').connect(config.mongoDB.url)

app.use('api', api)

module.exports = app
