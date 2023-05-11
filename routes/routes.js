const express = require('express')
const router = express.Router()

const controllers = require('../cotroller/index')

router.get('/', controllers.home)

router.get('/test', controllers.test)

router.get('/dialog/questions', controllers.findAllQuestions)

router.get('/dialog/answer/:id', controllers.findById)

module.exports = router