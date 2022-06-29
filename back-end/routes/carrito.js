// Rutas para el carrito
const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

// api/carrito
router.post('/', carritoController.crearCarrito);
router.get('/', carritoController.obtenerCarritos);
router.put('/:id', carritoController.agregarProducto);
router.get('/:id', carritoController.obtenerCarrito);
router.delete('/:id', carritoController.eliminarCarrito);
router.delete('/eliminar/:id', carritoController.eliminarProductoCarrito);


module.exports = router;