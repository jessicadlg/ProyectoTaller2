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

  obtenerCarritos(): Observable<any> {
    return this.http.get(this.url);
  }

  crearCarrito(): Observable<any> { 
    return this.http.post(this.url,null);
  }

  eliminarCarrito(idCarrito:string,idProducto: string): Observable<any> {
    return this.http.delete(this.url + "eliminar/" + idCarrito, {body : {idProducto}});
  }

  agregarProducto(idCarrito:string,idProducto: string): Observable<any> {
    return this.http.put(this.url + idCarrito , {idProducto});
  }

  obtenerCarrito(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
