//cómo una solicitud puede pasar por una aplicación Express. 
//Viaja a tres middlewares. Cada uno puede modificarlo, luego, según 
//la lógica empresarial, el tercer middleware puede enviar una respuesta 
//o puede ser un controlador de ruta.
/*
const express = require('express')
const app = express()

app.use((request, response, next) => {
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {
  response.json({
    chance: request.chance
  })
})

app.listen(3000)*/

//MANEJO DE ERRORES     
const express = require('express')
const app = express()

app.get('/', (request, response) => {
  throw new Error('oops')
})

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})