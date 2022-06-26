const Carrito = require("../models/Carrito");
const Producto = require("../models/Producto");

const {
  guardarDBCarrito,
  leerDBCarrito,
  leerDBProducto,
  guardarDBProducto,
} = require("../database/guardarArchivo");
const fs = require("fs");

const carritoJson = "./database/carrito.json";
const productosJson = "./database/productos.json";

// exports.buscarProductoPorPrecio = async(req,res)=>{

//     try {
//         let precio = req.params.precio;
//         console.log(precio);
//         const productos = await Producto.find({precioWithDiscount:{$gt:precio}});

//         // {age:{$gt:30}},{name:1,age:1}
//         res.json(productos)
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Hubo un error');
//     }
// }

exports.crearProducto = async (req, res) => {
  try {
    let {nombre,categoria,precioOriginal,precioConDescuento,descuento,imagen} = req.body;
    const jsonData = leerDBProducto();
    // producto = new Producto("Ketchup", "Aderezo", 1000, 500, 50, "qsy");
    // Creamos nuestro producto
    let producto = new Producto(nombre,categoria,precioOriginal,precioConDescuento,descuento,imagen);
    jsonData.push(producto);

    guardarDBProducto(jsonData);

    res.send(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerProductos = async (req, res) => {
  try {
    // const productos = await Producto.find();
    // const info = fs.readFileSync(productosJson, { encoding: "utf-8" });
    const jsonData = leerDBProducto();
    // const data = JSON.parse(info);
    res.json(jsonData);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.actualizarProducto = async (req, res) => {
  try {
    const { nombre, categoria, ubicacion, precio } = req.body;
    // let producto = await Producto.findById(req.params.id);

    const jsonData = leerDBProducto();

    // let producto = new Producto("Sabora","Aderezo",1000,500,50,"qsy");

    const producto = jsonData.find((producto) => producto.id === req.params.id);

    if (!producto) {
      res.status(404).json({ msg: "No existe el producto" });
    }

    const indice = jsonData.findIndex((elemento, indice) => {
        if (elemento.id === producto.id) {
          return true;
        }
      });

    producto.nombre = nombre;
    producto.categoria = categoria;
    producto.ubicacion = ubicacion;
    producto.precio = precio;

    jsonData[indice] = producto;
    guardarDBProducto(jsonData);
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerProducto = async (req, res) => {

    try {
        // let producto = await Producto.findById(req.params.id);
        const jsonData = leerDBProducto();

        const producto = await jsonData.find((producto) => producto.id === req.params.id);

        if(!producto) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProducto = async (req, res) => {

    try {

        const jsonData = leerDBProducto();
        jsonData.forEach(function(element,index,arr) {
            if(element.id === req.params.id){
                jsonData.splice(index,1);
            }
        });
        // delete jsonData[req.params.id];
        guardarDBProducto(jsonData);
        // let producto = await Producto.findById(req.params.id);

        // if(!producto) {
        //     res.status(404).json({ msg: 'No existe el producto' })
        // }

        // await Producto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}
