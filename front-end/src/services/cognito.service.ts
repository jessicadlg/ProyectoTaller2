import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000/api/cognito/';
  
  confirmarCuenta(email:string,code:string): Observable<any> { 
    return this.http.post(this.url + "confirm",{email,code});
  }

  signIn(password:string,email:string): Observable<any> { 
    return this.http.post(this.url + "signin",{password,email});
  }
}
