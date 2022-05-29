import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  // para no inicializar se le coloca el !
  signupForm!: FormGroup;

  constructor(private userService: UsersService) {
    this.signupForm = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      direction: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    //this.signupForm = this.initForm();
  }

  async onSubmit(){

    console.log('form->', this.signupForm.value);
    const response =  await this.userService.addUser(this.signupForm.value)
    console.log(response);

  }

  /*initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repassword: ['', Validators.required],
    });
  }*/
}
