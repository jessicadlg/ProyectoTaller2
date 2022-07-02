import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  url = 'http://localhost:4000/api/pedido/';

  constructor(private http: HttpClient) { }

  guardarProducto(idCarrito: string): Observable<any> {
    return this.http.post(this.url, {idCarrito});
  }
}
