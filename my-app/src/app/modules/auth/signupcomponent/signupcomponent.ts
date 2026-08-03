import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InputComponent, CustomDatePickerComponent, DateRange, DateTimeResult } from 'cats-ui-lib';
import { ApiService } from '../../../service/api-servic';

@Component({
  selector: 'app-signupcomponent',
  imports: [FormsModule, ReactiveFormsModule, InputComponent, CustomDatePickerComponent],
  templateUrl: './signupcomponent.html',
  styleUrl: './signupcomponent.scss',
})
export class Signupcomponent {
  constructor(private service: ApiService) {}
  displayData($event: string | Date | DateRange | DateTimeResult) {
    throw new Error('Method not implemented.');
  }
  myform = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    username: new FormControl(''),
    pass: new FormControl(''),
    cpass: new FormControl(''),
    number: new FormControl(''),
    date: new FormControl(''),
  });

  isSubmitted = false;

  onsubmit() {
    this.isSubmitted = true;
    this.myform.markAllAsTouched();
    if (this.myform.invalid) return;
    this.service.createProfile(this.myform.value).subscribe({
      next: (response) => {
        console.log('response got successfully', response);
      },
      error: (error) => {
        console.error('error found', error);
      },
    });
    console.log('all input value founds', this.myform.value);
    this.myform.reset();
    this.isSubmitted = false;
  }

  inputConfig: any = {
    type: 'text',
    placeholder: 'Enter value',
  };
}
