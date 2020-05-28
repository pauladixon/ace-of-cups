const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/users')

router.post('/signup', usersCtrl.signup)

module.exports = router