const router = require('express').Router()

router.use('/snippets', require('snippet/snippetRoutes.js'))
router.use('/tags', require('tag/tagRoutes.js'))
router.use('/users', require('user/userRoutes.js'))

module.exports = router
