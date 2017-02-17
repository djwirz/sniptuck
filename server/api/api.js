const router = require('express').Router()
const snippet = require('./snippet/snippetRoutes.js')
const tags = require('./tag/tagRoutes.js')
const users = require('./user/userRoutes.js')

router.use('/snippets', snippet)
router.use('/tags', tags)
router.use('/users', users)

module.exports = router
