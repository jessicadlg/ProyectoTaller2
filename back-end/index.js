const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

// Creamos el servidor
const app = express();


app.use(express.json());
app.use(cors());

// Conectamos a la BD(json)

app.use('/api/productos', require('./routes/producto'));
app.use('/api/carrito', require('./routes/carrito'));
app.use('/api/cognito',require('./routes/cognito'));


app.use(express.json());
app.use(cors());

//
// const port = process.env.PORT || 3000;+ port
app.listen(4000, () => {
  console.log('El servidor esta corriendo perfectamente en el puerto 4000');
});
