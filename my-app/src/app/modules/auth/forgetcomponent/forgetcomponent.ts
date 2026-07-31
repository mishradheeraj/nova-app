import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from 'cats-ui-lib';

@Component({
  selector: 'app-forgetcomponent',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputComponent],
  templateUrl: './forgetcomponent.html',
  styleUrl: './forgetcomponent.scss',
})
export class Forgetcomponent {
  otpSent = false;
  resetSuccess = false;

  emailForm = new FormGroup({
    email: new FormControl(''),
  });

  resetForm = new FormGroup({
    otp: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  onSendOtp() {
    console.log('send otp to', this.emailForm.value);
    this.otpSent = true;
  }

  onResetPassword() {
    console.log('reset password', this.resetForm.value);
    this.resetSuccess = true;
    this.resetForm.reset();
  }

  emailConfig: any = {
    type: 'email',
    placeholder: 'Enter your registered email',
  };

  otpConfig: any = {
    type: 'text',
    placeholder: 'Enter OTP',
  };

  passwordConfig: any = {
    type: 'password',
    placeholder: 'Enter password',
  };
}
