const express = require('express')
const router = express.Router()

const controllers = require('../cotroller/index')



/**
 * @swagger
 * /api/v1/:
 *  get:
 *    description: Home route
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', controllers.home)

/**
 * @swagger
 * /api/v1/test:
 *  get:
 *    description: Test route
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/test', controllers.test)

/**
 * @swagger
 * /api/v1/dialog/questions:
 *  get:
 *    description: Use to request all questions
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/dialog/questions', controllers.findAllQuestions)

/**
 * @swagger
 * /api/v1/dialog/answer/{id}:
 *  get:
 *    description: Use to find dialog by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the dialog
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: Dialog not found
 */
router.get('/dialog/answer/:id', controllers.findById)

module.exports = router