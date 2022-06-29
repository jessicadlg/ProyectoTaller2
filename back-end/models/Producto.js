const {v4: uudiv4} = require('uuid');

class Producto{

    id = "";
    nombre = "";
    categoria = "";
    precioOriginal = "";
    precioConDescuento = "";
    descuento = "";
    imagen = "";
    cantidad = 0

    constructor(nombre,categoria,precioOriginal,precioConDescuento,descuento,imagen,cantidad){
        this.id = uudiv4();
        this.nombre = nombre;
        this.categoria = categoria;
        this.precioConDescuento = precioConDescuento;
        this.precioOriginal = precioOriginal;
        this.descuento = descuento;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }


}

module.exports = Producto;