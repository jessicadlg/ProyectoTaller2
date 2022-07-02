const express = require('express');
const cors = require('cors');

// Creamos el servidor
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/productos', require('./routes/producto'));
app.use('/api/carrito', require('./routes/carrito'));
app.use('/api/cognito',require('./routes/cognito'));
app.use('/api/pedido',require('./routes/pedido'));

app.use(express.json());
app.use(cors());

app.listen(4000, () => {
  console.log('El servidor esta corriendo perfectamente en el puerto 4000');
});
