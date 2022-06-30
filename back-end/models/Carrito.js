const {v4: uudiv4} = require('uuid');

class Carrito {

  id = "";
  idUsuario = "";
  productos = [];


  constructor(){
    this.productos = []
    this.id = uudiv4();
    this.idUsuario = uudiv4();
  }

}

module.exports = Carrito;
