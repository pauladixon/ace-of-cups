const express = require('express')
const router = express.Router()
const entriesCtrl = require('../../controllers/entries')

router.get('/', entriesCtrl.journalEntries)

// protected routes //

router.use(require('../../config/auth'))

router.post('/', checkAuth, entriesCtrl.create)
router.delete('/:id', checkAuth, entriesCtrl.delete)
router.put('/:id', checkAuth, entriesCtrl.update)

function checkAuth(req, res, next) {
    if (req.user) return next()
    return res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router