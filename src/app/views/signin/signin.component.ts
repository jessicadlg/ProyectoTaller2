import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  isEmail = /\S+@\S+\.\S+/;
  // para validar los campos falta renderizar mensajes x error de datos, si funciona el msj de campo vacio requerido
  signinForm = this.fb.group({
    usuario: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
  ]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
      ],
    ],
  });

  constructor( protected router: Router,private  fb: FormBuilder) {}

  ngOnInit(): void {
  }

  
  onSubmit(): void {
    if(this.signinForm.valid){
         console.log('form->', this.signinForm.value);
    }else{
      console.log('no valido');
    }
  }

  irARegistro() {
    this.router.navigate(['/signup']);
  }
  
}
