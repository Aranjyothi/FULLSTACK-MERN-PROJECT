const express = require('express')
const router = express.Router()

const authCtrl = require('../controller/auth-controller')

router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)

router.get('/test',authCtrl.testroute)

module.exports = router