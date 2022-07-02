import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from '../../../services/producto.service';
import { CarritoService } from '../../../services/carrito.service';
import { Carrito } from '../../models/Carrito';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  carrito: Carrito = new Carrito('', '', []);

  // PRODUCTO: Producto = {
  //   id: "313",
  //   nombre: 'Mayonesa',
  //   categoria: 'Aderezo',
  //   imagen:
  //     'https://http2.mlstatic.com/D_NQ_NP_733120-MLA50131748752_052022-O.webp',
  //   precioOriginal: 1000,
  //   precioConDescuento: 500,
  //   descuento: 50,
  //   cantidad: 10
  // };

  constructor(
    protected router: Router,
    private productoService: ProductoService,
    private carritoService: CarritoService,
    private toastr: ToastrService,
    private activatedRoute:ActivatedRoute,
  ) {}


  ngOnInit(): void {
    this.obtenerProductos();
    this.agregarCarrito();
    console.log(this.activatedRoute.snapshot.params);

    let error = this.activatedRoute.snapshot.queryParamMap.get('error');
    if(error == "true"){
      this.toastr.error('Ha ocurrido un error, intenta otra vez','¡Ups!',);
    }

  }

  // agregarProducto() {
  //   console.log(this.PRODUCTO);
  //   this.productoService.guardarProducto(this.PRODUCTO).subscribe(
  //     (data) => {},
  //     (error) => {
  //       console.log(error);
  //       // this.productoForm.reset();
  //     }
  //   );
  // }

  agregarCarrito() {
    if (this.carrito.id === '') {
      this.carritoService.crearCarrito().subscribe(
        (data) => {
          let { id, idUsuario, productos } = data;
          this.carrito = new Carrito(id, idUsuario, productos);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.carritoService.obtenerCarrito(this.carrito.id).subscribe(
        (data) => {
          let { id, idUsuario, productos } = data;
          this.carrito = new Carrito(id, idUsuario, productos);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  agregarProductoAlCarrito(idProducto:string): void {
    this.carritoService.agregarProducto(this.carrito.id,idProducto).subscribe(
      (data) => {
        this.ngOnInit();
        this.toastr.success('Tu producto fue agregado al carrito','¡Excelente eleccion!',);
        this.router.navigate(['/productos']);
      },
      (error) => {
        console.log(error);
      }
    );
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

  eliminarProductoDelCarrito(idCarrito:string,idProducto:string){
    this.carritoService.eliminarCarrito(idCarrito,idProducto).subscribe(
      (data) => {
        this.ngOnInit();
        this.toastr.show('Se elimino el producto del carrito');
        this.router.navigate(['/productos']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
