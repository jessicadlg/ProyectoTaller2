export class Carrito {
    id?: string;
    idUsuario:string;
    productos : [];

    constructor(id:string, idUsuario:string, productos:[]){
        this.id = id;
        this.idUsuario = idUsuario;
        this.productos = productos;
    }

}