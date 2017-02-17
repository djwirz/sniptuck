const router = require('express').Router()
const User = require('./userModel.js')
const _ = require('lodash')

router.param('id', function (req, res, next, id) {
  User.findById(id)
    .select('-password')
    .exec()
    .then(function (user) {
      if (!user) {
        next(new Error('Given id does not match any user'))
      } else {
        req.user = user
        next()
      }
    }, function (err) {
      next(err)
    })
})

router.get('/me', function (req, res) {
  res.json(req.user.toJson())
})

router.route('/')
  .get(function (req, res, next) {
    User.find()
      .select('-password')
      .exec()
      .then(function (users) {
        res.json(users.map(function (user) {
          return user.toJson()
        }))
      }, function (err) {
        next(err)
      })
  })
  .post(function (req, res, next) {
    let newUser = new User(req.body)
    newUser.save(function (err, user) {
      if (err) {
        return next(err)
      } else {
        res.json({authIsNeeded: 'authIsStillNeeded'})
      }
    })
  })

router.route('/:id')
  .get(function (req, res, next) {
    let user = req.user.toJson()
    res.json(user.toJson())
  })
  .put(function (req, res, next) {
    let user = req.user
    let changed = req.body
    _.merge(user, changed)
    user.save(function (err, saved) {
      if (err) {
        next(err)
      } else {
        res.json(saved.toJson())
      }
    })
  })
  .delete(function (req, res, next) {
    req.user.remove(function (err, removed) {
      if (err) {
        next(err)
      } else {
        res.json(removed.toJson())
      }
    })
  })

module.exports = router
