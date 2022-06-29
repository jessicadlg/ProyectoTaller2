export class Producto {
    id: string;
    nombre: string;
    categoria: string;
    precioOriginal: number;
    precioConDescuento : number;
    descuento : number
    imagen: string;
    cantidad: number;

    constructor(id:string,nombre: string, categoria: string, precioOriginal: number,precioConDescuento:number,descuento:number,imagen:string,cantidad:number){
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precioOriginal = precioOriginal;
        this.precioConDescuento = precioConDescuento;
        this.descuento = descuento;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }
    
}