const Carrito = require('../models/Carrito');
const Producto = require('../models/Producto');


exports.eliminarCarrito = async (req, res) => {

    try {
        let carrito = await Carrito.findById(req.params.id);

        if(!carrito) {
            res.status(404).json({ msg: 'No existe el carrito' })
        }
       
        await Carrito.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Carrito eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerCarrito = async (req, res) => {

    try {
        let carrito = await Carrito.findById(req.params.id);

        if(!carrito) {
            res.status(404).json({ msg: 'No existe el carrito' })
        }
       
        res.json(carrito);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.crearCarrito = async(req,res) =>{

    try {
        let carrito;
        // Creamos nuestro carrito
        carrito = new Carrito();

        await carrito.save();
        res.send(carrito);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerCarritos = async (req, res) => {

    try {
        const carritos = await Carrito.find();
        res.json(carritos)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.agregarProducto = async (req, res) => {

    try {

        const { idProducto } = req.body;
        // let carrito = await Carrito.findById(req.params.id);
        let producto = await Producto.findById(idProducto);
        // if(!carrito) {
        //     res.status(404).json({ msg: 'No existe el carrito' })
        // }
        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        // let producto = new Producto()
        // producto.nombre = "Ketchupss";
        // producto.categoria = "QUEHACEPA";
        // producto.ubicacion = "nose";
        // producto.precioOriginal = 2000;
        // producto.precioWithDiscount = 10;
        // producto.descuento = 2000;

        let carrito = await Carrito.findByIdAndUpdate(req.params.id,{$push : {listaProductos : producto}});

        // Creamos nuestro producto
        // carrito.listaProductos.push(producto);

        // producto = new Producto(req.body);

        // await carrito.save();
        res.send(carrito);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}