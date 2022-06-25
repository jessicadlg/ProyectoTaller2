const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    precioOriginal: {
        type: Number,
        required: true
    },
    precioWithDiscount: {
        type: Number,
        required: true
    },
    descuento: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },

});

module.exports = mongoose.model('Producto', ProductoSchema);