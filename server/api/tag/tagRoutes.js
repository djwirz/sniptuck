const router = require('express').Router()
const Tag = require('./tagModel.js')

router.param('id', function (req, res, next, id) {
  Tag.findById(id)
    .then(function (tag) {
      if (!tag) {
        next(new Error('A tag with that id does not exist'))
      } else {
        req.tag = tag
        next()
      }
    }, function (err) {
      next(err)
    })
})

router.route('/')
  .get(function (req, res, next) {
    Tag.find()
      .then(function (tags) {
        res.json(tags)
      }, function (err) {
        next(err)
      })
  })
  .post(function (req, res, next) {
    let newTag = req.body
    Tag.create(newTag)
      .then(function (tag) {
        res.json(tag)
      }, function (err) {
        next(err)
      })
  })

router.route('/:id')
    .get(function (req, res, next) {
      let tag = req.tag
      res.json(tag)
    })

module.exports = router
