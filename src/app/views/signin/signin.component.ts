import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;

  //isEmail = /\S+@\S+\.\S+/;
  // para validar los campos falta renderizar mensajes x error de datos, si funciona el msj de campo vacio requerido
  /*signinForm = this.fb.group({
    usuario: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });*/

  //constructor(protected router: Router, private fb: FormBuilder) {}

  constructor(private userService: UsersService) {
    this.signinForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
  ngOnInit(): void {}

   onSubmit(){
  
  }

  /*irARegistro() {
    this.router.navigate(['/signup']);
  }*/
}
