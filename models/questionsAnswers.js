const mongoose = require('mongoose')

const questionsAnswers = new mongoose.Schema({
    id:Number,
    question:String,
    response:String,
})

const quesAns = mongoose.model('quesAns', questionsAnswers)

module.exports = quesAns