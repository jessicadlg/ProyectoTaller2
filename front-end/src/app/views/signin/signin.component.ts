import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService } from '../../../services/cognito.service';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  // para validar los campos falta renderizar mensajes x error de datos, si funciona el msj de campo vacio requerido
  // signinForm = this.fb.group({
  //   usuario: [
  //     '',
  //     [
  //       Validators.required,
  //       Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
  //     ],
  //   ],
  //   password: ['', [Validators.required, Validators.minLength(8)]],
  // });
  //
  signinForm!: FormGroup;
  email!: String;
  //
  constructor(
    protected router: Router,
    private fb: FormBuilder,
    protected httpClient: HttpClient,
    private cognitoService: CognitoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    console.log('form->', this.signinForm.value);
  }

  onSubmit() {
    this.cognitoService
      .signIn(
        this.signinForm.get('password')?.value,
        this.signinForm.get('email')?.value
      )
      .subscribe(
        (data) => {
          let {login} = data;
          console.log(login)
          if(login){
            this.router.navigate(['/productos']);
            this.toastr.success("¡Bienvenido!");
          }
        },
        (error) => {
          this.toastr.error('Ha ocurrido un error, intenta otra vez', '¡Ups!');
        }
      );
  }
}
