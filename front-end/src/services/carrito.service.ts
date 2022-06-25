import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../app/models/producto';
import { Carrito } from '../app/models/Carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  url = 'http://localhost:4000/api/carrito/';

  constructor(private http: HttpClient) { }

  crearCarrito(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarCarrito(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  agregarProducto(carrito: Carrito): Observable<any> {
    return this.http.post(this.url, carrito);
  }

  obtenerCarrito(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
