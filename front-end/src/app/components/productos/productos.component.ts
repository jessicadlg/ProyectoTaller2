import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];


  carrito: Array<any> = [
    {
      nombre: 'Alimento Dogui Recetas Caseras',
      precioOriginal: '1000',
      descuento: '50',
      precioWithDiscount: '500',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_733120-MLA50131748752_052022-O.webp',
    },
    {
      nombre: 'Alimento Sieger Super Premium',
      precioOriginal: '2000',
      descuento: '25',
      precioWithDiscount: '1500',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_733120-MLA50131748752_052022-O.webp',
    },
    {
      nombre: 'Alimento Iams Proactive Health',
      precioOriginal: '3000',
      descuento: '75',
      precioWithDiscount: '2250',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_733120-MLA50131748752_052022-O.webp',
    },
  ];

  // carrito: Array<any> = [];

  constructor(protected router: Router,private productoService:ProductoService) {}

  ngOnInit(): void {
    // this.agregarProducto()
    this.obtenerProductos();
  }

  // const PRODUCTO: Producto = {
  //   nombre: 'Mayonesa',
  //   categoria: 'Aderezo',
  //   ubicacion: 'Qsy',
  //   imagen: 'https://http2.mlstatic.com/D_NQ_NP_733120-MLA50131748752_052022-O.webp',
  //   precioOriginal: 1000,
  //   precioWithDiscount: 500,
  //   descuento : 50
  // }

  // agregarProducto() {
  //   console.log(PRODUCTO);
  //   this.productoService.guardarProducto(PRODUCTO).subscribe(data => {
  //     // this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
  //     // this.router.navigate(['/']);
  //   }, error => {
  //     console.log(error);
  //     // this.productoForm.reset();
  //   })
  // }

  setAgregarProductoAlCarrito(_id:any):void{
    
    console.log(_id);
    
  }


  carritoPage(): any {
    let body = document.querySelector("body");
    if(body?.classList.remove("modal-open")){
      body?.classList.remove("modal-open");
      body?.style.removeProperty('padding-right');
      // body?.removeAttribute("style");
    }
    this.router.navigateByUrl('/carrito');
  }

  obtenerProductos() {
    this.productoService.getProductos().subscribe(data => {
      // console.log(data);
      this.productos = data;
    }, error => {
      console.log(error);
    })
  }


}
