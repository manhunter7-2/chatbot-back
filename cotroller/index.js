const dialogs = require("../other/dialog.json");

const dialogController = {
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
  }
}

module.exports = dialogController