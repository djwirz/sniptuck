const _ = require('lodash')

const config = {
  developement: 'developement',
  testing: 'testing',
  production: 'production',
  port: process.env.PORT || 3000
}

process.env.NODE_ENV = process.env.NODE_ENV || config.developement
config.env = process.env.NODE_ENV

const envConfig = require(`./${config.env}`)

module.exports = _.merge(config, envConfig)
