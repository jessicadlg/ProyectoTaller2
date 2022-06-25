const express = require('express');
const {conectarDB} = require('./database/config');
const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));
app.use('/api/carrito', require('./routes/carrito'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})