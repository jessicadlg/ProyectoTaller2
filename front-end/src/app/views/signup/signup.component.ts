import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

//
import { Router } from '@angular/router';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  //probando cognito
  signupForm!: FormGroup;
  passwordsCorrect!: Boolean;
  formatValid!: Boolean;
  statusOk!: Boolean;

  constructor(
    protected router: Router,
    private formBuilder: FormBuilder,
    protected httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellido: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      password2: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    if (
      this.signupForm.get('password')?.value !==
      this.signupForm.get('password2')?.value
    ) {
      this.formatValid = true;
      this.passwordsCorrect = false;
      console.log("Entro aca 1");
    } else {
      console.log("Entro aca 2");
      
      this.passwordsCorrect = true;
      this.httpClient
        .post('http://localhost:4000/api/cognito/signup', {
          password: this.signupForm.get('password')?.value,
          password2: this.signupForm.get('password2')?.value,
          email: this.signupForm.get('email')?.value,
          nombre: this.signupForm.get('nombre')?.value,
          apellido: this.signupForm.get('apellido')?.value,
          direccion: this.signupForm.get('telefono')?.value,
        })
        .subscribe((value) => {
          var response = value;
          console.log(value);
          
          if (response === 'InvalidParameterException')
            this.formatValid = false;
          if (response === 'ok') this.router.navigate(['/confirm']);
          this.statusOk = true;
        });
    }
  }
}
