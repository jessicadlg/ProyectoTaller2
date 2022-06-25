const mongoose = require('mongoose');

const carritoSchema = mongoose.Schema({

    listaProductos: [
        { type: mongoose.Schema.ObjectId, ref: "Producto" }
    ]


})

module.exports = mongoose.model('Carrito', carritoSchema);