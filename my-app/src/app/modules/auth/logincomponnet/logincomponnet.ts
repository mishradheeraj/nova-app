import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { InputComponent } from 'cats-ui-lib';

@Component({
  selector: 'app-logincomponnet',
  imports: [FormsModule, ReactiveFormsModule, InputComponent],
  templateUrl: './logincomponnet.html',
  styleUrl: './logincomponnet.scss',
})
export class Logincomponnet {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(false),
  });

  onLogin() {
    console.log('login values', this.loginForm.value);
    this.loginForm.reset();
  }

  emailConfig: any = {
    type: 'email',
    placeholder: 'Enter your email',
  };

  passwordConfig: any = {
    type: 'password',
    placeholder: 'Enter your password',
  };
}
