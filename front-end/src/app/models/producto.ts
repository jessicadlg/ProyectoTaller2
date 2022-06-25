export class Producto {
    _id?: number;
    nombre: string;
    categoria: string;
    ubicacion: string;
    imagen: string;
    precioOriginal: number;
    precioWithDiscount : number;
    descuento : number

    constructor(nombre: string, categoria: string, ubicacion: string, precioOriginal: number,precioWithDiscount:number,descuento:number,imagen:string ){
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precioOriginal = precioOriginal;
        this.precioWithDiscount = precioWithDiscount;
        this.descuento = descuento;
        this.imagen = imagen;
    }
}