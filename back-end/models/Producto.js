
const {v4: uudiv4} = require('uuid');

// const mongoose = require('mongoose');
// const ProductoSchema = mongoose.Schema({
//     nombre: {
//         type: String,
//         required: true
//     },
//     categoria: {
//         type: String,
//         required: true
//     },
//     ubicacion: {
//         type: String,
//         required: true
//     },
//     precioOriginal: {
//         type: Number,
//         required: true
//     },
//     precioWithDiscount: {
//         type: Number,
//         required: true
//     },
//     descuento: {
//         type: Number,
//         required: true
//     },
//     fechaCreacion: {
//         type: Date,
//         default: Date.now()
//     },

// });

// module.exports = mongoose.model('Producto', ProductoSchema);



class Producto{

    id = "";
    nombre = "";
    categoria = "";
    precioOriginal = "";
    precioConDescuento = "";
    descuento = "";
    imagen = "";

    constructor(nombre,categoria,precioOriginal,precioConDescuento,descuento,imagen){
        this.id = uudiv4();
        this.nombre = nombre;
        this.categoria = categoria;
        this.precioConDescuento = precioConDescuento;
        this.precioOriginal = precioOriginal;
        this.descuento = descuento;
        this.imagen = imagen;
    }


}

module.exports = Producto;