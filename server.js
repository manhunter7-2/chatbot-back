const express = require('express')
const app = express()
const port = 3000

app.use('/', require('./routes/routes'))

app.get('*', (req, res) => {
  // res.status(404).json({message: 'Not found'}) bonne pratique
  res.sendFile(__dirname + '/view/404.html')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
