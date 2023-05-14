const express = require('express')
const router = express.Router()

const controllers = require('../cotroller/index')



/**
 * @swagger
 * /:
 *  get:
 *    description: Home route
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', controllers.home)

/**
 * @swagger
 * /test:
 *  get:
 *    description: Test route
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/test', controllers.test)

/**
 * @swagger
 * /dialog/questions:
 *  get:
 *    description: Use to request all questions
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/dialog/questions', controllers.findAllQuestions)

/**
 * @swagger
 * /dialog/answer/{id}:
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

/**
* @swagger
* /testMongo:
*  get:
*    description: Test GET MongoDB
*    responses:
*      '200':
*        description: A successful response
*      '404':
*        description: Not found
*      '500':
*        description: error
*/
router.get('/testMongo', controllers.findMongoTest)

module.exports = router