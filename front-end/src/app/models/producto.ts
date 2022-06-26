export class Producto {
    id?: number;
    nombre: string;
    categoria: string;
    precioOriginal: number;
    precioConDescuento : number;
    descuento : number
    imagen: string;

    constructor(nombre: string, categoria: string, precioOriginal: number,precioConDescuento:number,descuento:number,imagen:string ){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precioOriginal = precioOriginal;
        this.precioConDescuento = precioConDescuento;
        this.descuento = descuento;
        this.imagen = imagen;
    }
    
}