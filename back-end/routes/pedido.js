// Rutas para guardar el pedido
const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// api/pedido
router.post('/', pedidoController.guardarPedido);


module.exports = router;