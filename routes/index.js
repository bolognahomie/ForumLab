const router = require('express').Router()

router.use(require('./client.js'))
router.use('/admin', require('./admin.js'))

module.exports = router