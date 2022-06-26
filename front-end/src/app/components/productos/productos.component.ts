import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from '../../../services/producto.service';
import { CarritoService } from '../../../services/carrito.service';
import { Carrito } from '../../models/Carrito';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  // carrito: Carrito[] = [];

  carrito: Array<any> = [
    {
      nombre: 'Alimento Dogui Recetas Caseras',
      precioOriginal: '1000',
      descuento: '50',
      precioWithDiscount: '500',
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_733120-MLA50131748752_052022-O.webp',
    },
    {
      nombre: 'Alimento Sieger Super Premium',
      precioOriginal: '2000',
      descuento: '25',
      precioWithDiscount: '1500',
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_733120-MLA50131748752_052022-O.webp',
    },
    {
      nombre: 'Alimento Iams Proactive Health',
      precioOriginal: '3000',
      descuento: '75',
      precioWithDiscount: '2250',
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_733120-MLA50131748752_052022-O.webp',
    },
  ];

  PRODUCTO: Producto = {
    nombre: 'Mayonesa',
    categoria: 'Aderezo',
    imagen:
      'https://http2.mlstatic.com/D_NQ_NP_733120-MLA50131748752_052022-O.webp',
    precioOriginal: 1000,
    precioConDescuento: 500,
    descuento: 50,
  };

  // carrito: Array<any> = [];

  constructor(
    protected router: Router,
    private productoService: ProductoService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.agregarCarrito();
    this.obtenerProductos();
  }

  agregarProducto() {
    console.log(this.PRODUCTO);
    this.productoService.guardarProducto(this.PRODUCTO).subscribe(
      (data) => {
        // this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
        // this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        // this.productoForm.reset();
      }
    );
  }

  agregarCarrito() {
    this.carritoService.crearCarrito().subscribe(
      (data) => {
        this.carrito.push(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setAgregarProductoAlCarrito(id: any): void {
  this.agregarCarrito();
  // alert(this.carrito);
    // alert(data);
  }

  carritoPage(): any {
    let body = document.querySelector('body');
    if (body?.classList.remove('modal-open')) {
      body?.classList.remove('modal-open');
      body?.style.removeProperty('padding-right');
      // body?.removeAttribute("style");
    }
    this.router.navigateByUrl('/carrito');
  }

  obtenerProductos() {
    this.productoService.getProductos().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
