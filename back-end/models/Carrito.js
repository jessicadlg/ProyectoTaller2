const {Schema,model} = require("mongoose");
const {v4: uudiv4} = require('uuid');

// const carritoSchema = Schema({
//   listaProductos: { 
//     type: Schema.Types.ObjectId,
//     ref: "Producto" 
//   }
// });

class Carrito {

  id = "";
  idUsuario = "";
  productos = [];


  constructor(){
    this.productos = {}
    this.id = uudiv4();
    this.idUsuario = uudiv4();
  }


}


// module.exports = model("Carrito", carritoSchema);
module.exports = Carrito;
