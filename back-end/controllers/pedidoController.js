const Carrito = require("../models/Carrito");
const Producto = require("../models/Producto");
const Pedido = require("../models/Pedido");

const {
  guardarDBCarrito,
  leerDBCarrito,
  leerDBProducto,
  guardarDBProducto,
  leerDBPedido,
  guardarDBPedido,
} = require("../database/guardarArchivo");
const fs = require("fs");

const carritoJson = "./database/carrito.json";
const productosJson = "./database/productos.json";
const pedidosJson = "./database/productos.json";

exports.guardarPedido = async (req, res) => {
  try {
    let { idCarrito } = req.body;
    if(idCarrito){
        const jsonCarrito = leerDBCarrito();
        const jsonDataPedido = leerDBPedido();
    
        let carritoBuscado = jsonCarrito.find(
          (carrito) => carrito.id === idCarrito
        );
        let pedido = new Pedido();
        carritoBuscado = await transformar(carritoBuscado);
    
        pedido.idCarrito = idCarrito;
        pedido.productos = carritoBuscado.productos;
    
        pedido = await transformar(pedido);
    
        jsonDataPedido.push(pedido);
        guardarDBPedido(jsonDataPedido);
        res.json({msg: "Se ha guardado el pedido"});
    }
    // res.json({error: "No se puede confirmar el pedido sin productos"})
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

const transformar = async (pedidoAtransformar) => {
  if (pedidoAtransformar) {
    let productos = [];

    Object.keys(pedidoAtransformar.productos).forEach((key) => {
      const producto = pedidoAtransformar.productos[key];
      productos.push(producto);
    });

    pedidoAtransformar.productos = productos;

    return pedidoAtransformar;
  }
  return { msg: "Error" };
};
