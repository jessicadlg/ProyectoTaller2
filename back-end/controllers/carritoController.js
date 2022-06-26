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

exports.obtenerCarritos = async (req, res) => {
  try {
    const info = fs.readFileSync(carritoJson, { encoding: "utf-8" });
    const data = JSON.parse(info);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.crearCarrito = async (req, res) => {
  try {
    let carrito = new Carrito();

    const jsonData = leerDBCarrito();

    jsonData.push(carrito);

    guardarDBCarrito(carrito);

    carrito = await transformar(carrito);
    
    res.json(JSON.stringify(carrito));
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.eliminarCarrito = async (req, res) => {
  try {
    const jsonData = leerDBCarrito();

    jsonData.forEach(function (element, index, arr) {
      if (element.id === req.params.id) {
        jsonData.splice(index, 1);
      }
    });

    guardarDBCarrito(jsonData);

    res.json({ msg: "Carrito eliminado con exito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerCarrito = async (req, res) => {
  try {
    const jsonData = leerDBCarrito();

    const carrito = jsonData.find((carrito) => carrito.id === req.params.id);

    res.json(carrito);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.agregarProducto = async (req, res) => {
  try {
    const { idProducto } = req.body;

    const jsonData = leerDBCarrito();

    let productJson = leerDBProducto();

    const producto = await productJson.find((producto) => producto.id === idProducto);

    // let producto = new Producto("Picante", "Aderezo", 1000, 500, 50, "qsy");

    const carrito = jsonData.find((carrito) => carrito.id === req.params.id);
    carrito.productos.push(producto);
    guardarDBCarrito(jsonData);

    res.send(carrito);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};


const transformar = async (carritoATransfomar)=>{

    if(carritoATransfomar){
        let productos = []

        Object.keys(carritoATransfomar.productos).forEach((key) => {
            const producto =  carritoATransfomar.productos[key];
            productos.push(producto);
          });
      
          carritoATransfomar.productos = productos;
    
          return carritoATransfomar;
    }
    return {msg: "Error"};
};
