const express = require('express')
const app = express()
const port = 3000

// Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Dialog API',
      description: 'Dialog API Information',
      contact: {
        name: 'Developer Name',
      },
      servers: ['http://localhost:3000'],
    },
  },
  apis: ['./routes/routes.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', require('./routes/routes'))

app.get('*', (req, res) => {
  // res.status(404).json({message: 'Not found'}) bonne pratique
  res.sendFile(__dirname + '/view/404.html')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})