import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {

  carrito: Array<any> = [
    {
      nombre: 'Alimento Old Prince Proteínas',
      precioOriginal: '200',
      descuento: '50',
      precioWithDiscount: '100',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_733120-MLA50131748752_052022-O.webp',
    },
    {
      nombre: 'Alimento Old Prince Proteínas',
      precioOriginal: '400',
      descuento: '25',
      precioWithDiscount: '300',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_733120-MLA50131748752_052022-O.webp',
    },
    {
      nombre: 'Alimento Old Prince Proteínas',
      precioOriginal: '500',
      descuento: '75',
      precioWithDiscount: '125',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_733120-MLA50131748752_052022-O.webp',
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
