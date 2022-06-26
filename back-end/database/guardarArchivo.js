const fs = require("fs");

//esta es la ruta donde guardaremos en nuestro simulador de db que en este caso es un json
const carrito = "./database/carrito.json";
const producto = "./database/productos.json";

const guardarDBCarrito = (data) => {
  fs.writeFileSync(carrito, JSON.stringify(data, null, 2));
};

const guardarDBProducto = (data) => {
  fs.writeFileSync(producto, JSON.stringify(data, null, 2));
};

const leerDBCarrito = () => {
  //verificamos que el archivo existe, ya que si no existe lanza un error
  //si no existe retorna un null y termina la funcion
  if (!fs.existsSync(carrito)) {
    return null;
  }

  //una vez llegado a este punto si es que lo hizo, quiere decir que existe un data.json
  //en el directorio nuestro, entonces lo que hacemos es leer ese archivo y con un encoding utf 8
  //para luego el contenido de ese json pasarlo a un nivel legible
  const info = fs.readFileSync(carrito, { encoding: "utf-8" });
  const data = JSON.parse(info);

  const carritos = [];
  const productos = [];

  Object.keys(data).forEach((key) => {
    const carrito = data[key];
    carritos.push(carrito);
    Object.keys(carrito.productos).forEach((key) => {
      const producto = carrito.productos[key];
      productos.push(producto);
    });
  });

  return carritos;
};

const leerDBProducto = () => {
  //verificamos que el archivo existe, ya que si no existe lanza un error
  //si no existe retorna un null y termina la funcion
  if (!fs.existsSync(producto)) {
    return null;
  }

  //una vez llegado a este punto si es que lo hizo, quiere decir que existe un data.json
  //en el directorio nuestro, entonces lo que hacemos es leer ese archivo y con un encoding utf 8
  //para luego el contenido de ese json pasarlo a un nivel legible
  const info = fs.readFileSync(producto, { encoding: "utf-8" });
  const data = JSON.parse(info);

  const productos = [];

  Object.keys(data).forEach((key) => {
    const producto = data[key];
    productos.push(producto);
  });

  return productos;
};

module.exports = {
  guardarDBCarrito,
  leerDBCarrito,
  leerDBProducto,
  guardarDBProducto
};
