import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carrito } from 'src/app/models/Carrito';
import { CarritoService } from 'src/services/carrito.service';
import {ToastrService} from 'ngx-toastr';
import { PedidoService } from '../../../services/pedido.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  total:number = 0;
  cantidad:number = 0;
  carrito: Carrito = new Carrito(
    '',
    '',
    []
  );

  constructor(private router: Router,private activatedRoute:ActivatedRoute, private carritoService: CarritoService,
    private toastr: ToastrService,private pedidoService:PedidoService
    ) {
  }

  ngOnInit(): void {
    let modal = document.querySelector('.modal-backdrop');
    let body = document.querySelector('body');
    if (modal) {
      let padre = modal.parentNode;
      padre?.removeChild(modal);
      body?.style.removeProperty('padding-right');
      body?.style.removeProperty('overflow');
    }
      let {id} = this.activatedRoute.snapshot.params
      this.carrito.id = id;
      this.obtenerCarrito();
  }

  obtenerCarrito() {
    let total = 0;
    let cantidad = 0;
      this.carritoService.obtenerCarrito(this.carrito.id).subscribe(
        (data) => {
          console.log('busco el carrito');
          let { id, idUsuario, productos } = data;
          if(id){
            this.carrito = new Carrito(id, idUsuario, productos);
            this.carrito.productos.forEach((element,index,arra)=>{
                total += element.precioConDescuento * element.cantidad;
                cantidad += element.cantidad;
            })
            this.total = total;
            this.cantidad = cantidad;
            this.toastr.info('¡Confirma tu compra!', "¡Ya casi lo tenes!");
            this.toastr.info('¡Confirma tu compra!', "¡Ya casi lo tenes!");
          }else{
            this.router.navigate(['/productos'], { queryParams: { error: true } });
          }
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
        },
        (error) => {
          console.log(error);
        }
      );
  }

  agregarProductoAlCarrito(idProducto:string): void {
      this.carritoService.agregarProducto(this.carrito.id,idProducto).subscribe(
        (data) => {
          this.ngOnInit();
          this.toastr.success('Tu producto fue agregado al carrito','¡Excelente eleccion!',);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  guardarPedido(){
    this.pedidoService.guardarProducto(this.carrito.id).subscribe((data)=>{
        let {msg} = data;
        this.toastr.success(msg);
        this.router.navigate(['/productos']);
    },
    (error)=>{
        console.log(error);
    })
  }
}
