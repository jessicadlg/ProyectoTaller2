import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: Array<any> = [
    {
      nombre: 'Pro Plan OptiRenal Sterilized ',
      precioOriginal: '200',
      descuento: '50',
      precioWithDiscount: '100',
      imagen: '',
    },
    {
      nombre: 'Excellent Veterinary Diets',
      precioOriginal: '400',
      descuento: '25',
      precioWithDiscount: '300',
      imagen: '',
    },
    {
      nombre: 'Alimento Dog Chow Salud Visible ',
      precioOriginal: '500',
      descuento: '75',
      precioWithDiscount: '125',
      imagen: '',
    },
    {
      nombre: 'Alimento Dogui Recetas Caseras',
      precioOriginal: '1000',
      descuento: '50',
      precioWithDiscount: '500',
      imagen: '',
    },
    {
      nombre: 'Alimento Sieger Super Premium',
      precioOriginal: '2000',
      descuento: '25',
      precioWithDiscount: '1500',
      imagen: '',
    },
    {
      nombre: 'Alimento Iams Proactive Health',
      precioOriginal: '3000',
      descuento: '75',
      precioWithDiscount: '2250',
      imagen: '',
    },
  ];

  carrito: Array<any> = [
    {
      nombre: 'Alimento Dogui Recetas Caseras',
      precioOriginal: '1000',
      descuento: '50',
      precioWithDiscount: '500',
      imagen: '',
    },
    {
      nombre: 'Alimento Sieger Super Premium',
      precioOriginal: '2000',
      descuento: '25',
      precioWithDiscount: '1500',
      imagen: '',
    },
    {
      nombre: 'Alimento Iams Proactive Health',
      precioOriginal: '3000',
      descuento: '75',
      precioWithDiscount: '2250',
      imagen: '',
    },
  ];

  constructor(protected router: Router) {}

  ngOnInit(): void {}

  carritoPage(): any {
    let body = document.querySelector("body");
    if(body?.classList.remove("modal-open")){
      body?.classList.remove("modal-open");
      body?.style.removeProperty('padding-right');
      // body?.removeAttribute("style");
    }
    this.router.navigateByUrl('/carrito');
  }

}
