const express = require('express')
// bodyParser = require("body-parser"),
// const swaggerAutogen = require("swagger-autogen")
// const swaggerUi = require("swagger-ui-express");
// const swaggerFile = require('./swagger_output.json')
// const outputFile = "./swagger-output.json"
// const endpointsFiles = ["./controller/index"]
// const config = {}
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/ez', (req, res) => {
//     res.send('izi pizi')
//   })

// swaggerAutogen()(outputFile, endpointsFiles, config).then(async () => {
//   await import('./index.js'); // Your express api project's root file where the server starts
// });

app.use('/', require('./routes/routes'))

app.get('*', (req, res) => {
  // res.status(404).json({message: 'Not found'}) bonne pratique
  res.sendFile(__dirname + '/view/404.html')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
