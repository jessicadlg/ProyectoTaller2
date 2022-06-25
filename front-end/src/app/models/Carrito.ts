export class Carrito {
    _id?: string;
    listaProductos : [];

    constructor(_id:string, listaProductos:[]){
        this._id = _id;
        this.listaProductos = listaProductos;
    }

}