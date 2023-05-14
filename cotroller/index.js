const dialogs = require("../other/dialog.json");
const qa = require('../models/questionsAnswers')

const controllers = {
  home: (req, res) => {
    res.send('Hello World!')
  },
  test: (req, res) => {
    res.send('Hello Test!')
  },
  findAllQuestions: (req, res) => {
    const questions = dialogs.map(({id, question}) => ({id, question}))
    res.json(questions)
  },
  findById: (req, res) => {
    const dialog = dialogs.find(dialog => dialog.id === parseInt(req.params.id))
    if (!dialog) return res.status(404).send('Dialog not found')
    res.json(dialog)
  },
  findMongoTest: ((req, res) =>{
    qa.find({})
    .then(result => res.status(200).json({result}))
    .catch(error => res.status(500).json({msg: error}))
  })
}

module.exports = controllers