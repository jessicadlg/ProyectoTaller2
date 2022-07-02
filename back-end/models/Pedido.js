const {v4: uudiv4} = require('uuid');

class Pedido {

    idPedido = "";
    idCarrito = "";
    productos = [];
  
  
    constructor(){
      this.productos = []
      this.idCarrito = "";
      this.idPedido = uudiv4();
    }
  
  }
  
  module.exports = Pedido;