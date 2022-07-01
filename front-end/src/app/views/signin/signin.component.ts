import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

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
    protected httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
    console.log(this.signinForm);
  }

  onSubmit(): void {
    this.httpClient
      .post('http://localhost:4000/signin', {
        password: this.signinForm.get('password')?.value,
        email: this.signinForm.get('email')?.value,
      })
      .subscribe((value) => {
        alert(JSON.stringify(value));
        var response = value;
        if (response === 'UserNotConfirmedException') {
          this.router.navigate(['confirm']);
        }
      });
    //   if (this.signinForm.valid) {
    //     console.log('form->', this.signinForm.value);
    //   } else {
    //     console.log('no valido');
    //   }
    // }
  }
}
