const router = require('express').Router()
const Snippet = require('./snippetModel.js')
const _ = require('lodash')

router.params(function (req, res, next, id) {
  Snippet.findById(id)
    .populate('developer', 'tags')
    .exec()
    .then(function (snippet) {
      if (!snippet) {
        next(new Error('No snippet exists with given id'))
      } else {
        req.snippet = snippet
        next()
      }
    }, function (err) {
      next(err)
    })
})

router.route('/')
  .get(function (req, res, next) {
    Snippet.find({})
      .populate('developer tags')
      .exec()
      .then(function (snippet) {
        res.json(snippet)
      }, function (err) {
        next(err)
      })
  })
  .post(function (req, res, next) {
    let newSnippet = new Snippet(req.body)
    newSnippet.developer = req.user._id
    Snippet.create(newSnippet)
      .then(function (snippet) {
        res.json(snippet)
      }, function (err) {
        next(err)
      })
  })

router.route('/:id')
  .get(function (req, res, next) {
    let snippet = req.snippet.toJson()
    res.json(snippet.toJson())
  })
  .put(function (req, res, next) {
    let snippet = req.snippet
    let changed = req.body
    _.merge(snippet, changed)
    snippet.save(function (err, saved) {
      if (err) {
        next(err)
      } else {
        res.json(saved.toJson())
      }
    })
  })
  .delete(function (req, res, next) {
    req.snippet.remove(function (err, removed) {
      if (err) {
        next(err)
      } else {
        res.json(removed.toJson())
      }
    })
  })

module.exports = router
