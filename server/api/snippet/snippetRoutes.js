const router = require('express').Router()
const Snippet = require('./snippetModel.js')

router.route('/')
  .get(function (req, res, next) {
    Snippet.find({})
      .populate('developer tags')
      .exec()
      .then(function (snippet) {
        res.json(snippet)
      }), function (err) {
        next(err)
      }
  })
  .post(function (req, res, next) {

  })

router.route('/:id')
  .get(function (req, res, next) {

  })
  .put(function (req, res, next) {

  })
  .delete(function (req, res, next) {

  })
