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
    guardarDBCarrito(jsonData);

    carrito = await transformar(carrito);

    res.json(carrito);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.eliminarCarrito = async (req, res) => {
  try {
    const jsonData = leerDBCarrito();
    console.log(req);

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

    const carritoBuscado = jsonData.find(
      (carrito) => carrito.id === req.params.id
    );

    const carrito = await transformar(carritoBuscado);

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

    const carritoBuscado = jsonData.find(
      (carrito) => carrito.id === req.params.id
    );

    const carrito = await transformar(carritoBuscado);

    const producto = await productJson.find(
      (producto) => producto.id === idProducto
    );
    if (!producto) {
      res.status(404).json({ msg: "No existe el producto" });
    }

    const productoExistente = await carrito.productos.find(
      (producto) => producto.id === idProducto
    );

    if (productoExistente == undefined) {
      carrito.productos.push(producto);
    } else {
      jsonData.forEach((carritoElement, index, arra) => {
        if (carritoElement.id === carrito.id) {
          carritoElement.productos.forEach(
            (productElement, indexProduct, arra) => {
              if (productElement.id === producto.id) {
                productElement.cantidad = productElement.cantidad + 1;
              }
            }
          );
        }
      });
    }
    guardarDBCarrito(jsonData);
    res.send(carrito);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.eliminarProductoCarrito = async (req, res) => {
  try {
    const { idProducto } = req.body;

    const jsonData = leerDBCarrito();
    let productJson = leerDBProducto();
    const carritoBuscado = jsonData.find(
      (carrito) => carrito.id === req.params.id
    );
    const carrito = await transformar(carritoBuscado);
    const producto = await productJson.find(
      (producto) => producto.id === idProducto
    );
    if (!producto) {
      res.status(404).json({ msg: "No existe el producto" });
    }

    jsonData.forEach((carritoElement, index, arra) => {
      if (carritoElement.id === carrito.id) {
        carritoElement.productos.forEach(
          (productElement, indexProduct, arra) => {
            if (productElement.id === producto.id) {
              productElement.cantidad = productElement.cantidad - 1;
              if(productElement.cantidad <= 0){
                carritoElement.productos.splice(indexProduct, 1);
              }
            }
          }
        );
      }
    });

    guardarDBCarrito(jsonData);
    res.send(carrito);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

const transformar = async (carritoATransfomar) => {
  if (carritoATransfomar) {
    let productos = [];

    Object.keys(carritoATransfomar.productos).forEach((key) => {
      const producto = carritoATransfomar.productos[key];
      productos.push(producto);
    });

    carritoATransfomar.productos = productos;

    return carritoATransfomar;
  }
  return { msg: "Error" };
};

const transformarProducto = async (productoATransformar) => {
  if (productoATransformar) {
    let productos = [];

    Object.keys(productoATransformar).forEach((key) => {
      const producto = productoATransformar[key];
      productos.push(producto);
    });

    productoATransformar = productos;

    return productoATransformar;
  }
  return { msg: "Error" };
};
