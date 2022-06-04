import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {

  carrito: Array<any> = [
    {
      nombre: 'Producto 1',
      precioOriginal: '200',
      descuento: '50',
      precioWithDiscount: '100',
      imagen: 'https://www.catycan.com/70504-home_default/pouch-pro-plan-wet-cat-adult-pollo-x-85-grs.jpg',
    },
    {
      nombre: 'Producto 2',
      precioOriginal: '400',
      descuento: '25',
      precioWithDiscount: '300',
      imagen: 'https://www.catycan.com/70504-home_default/pouch-pro-plan-wet-cat-adult-pollo-x-85-grs.jpg',
    },
    {
      nombre: 'Producto 3',
      precioOriginal: '500',
      descuento: '75',
      precioWithDiscount: '125',
      imagen: 'https://www.catycan.com/70504-home_default/pouch-pro-plan-wet-cat-adult-pollo-x-85-grs.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    let modal = document.querySelector('.modal-backdrop');
    let body = document.querySelector("body");
    if (modal) {
      let padre = modal.parentNode;
      padre?.removeChild(modal);
      body?.style.removeProperty('padding-right');
      body?.style.removeProperty('overflow');
    }

  }
}
