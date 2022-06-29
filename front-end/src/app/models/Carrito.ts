import { Producto } from "./producto";

export class Carrito {
    id: string;
    idUsuario:string;
    productos:Array<Producto>;

    constructor(id:string, idUsuario:string, productos:Array<Producto>){
        this.id = id;
        this.idUsuario = idUsuario;
        this.productos = productos;
    }

}