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
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {
  confirmForm!: FormGroup;
  email!: String;
  code: String | undefined;
  statusCode: Boolean | undefined;

  constructor(
    protected router: Router,
    private formBuilder: FormBuilder,
    protected httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.statusCode = true;
    this.confirmForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      code: new FormControl('', Validators.required),
    });
  }

  confirmAccount() {
    this.httpClient
      .post('http://localhost:4000/confirm', {
        code: this.confirmForm.get('code')?.value,
        email: this.confirmForm.get('email')?.value,
      })
      .subscribe((value) => {
        alert(JSON.stringify(value));
        var response = value;
        if (response === 'ok') this.router.navigate(['/signin']);
        if (response === 'CodeMismatchException') this.statusCode = false;
      });
  }
}
