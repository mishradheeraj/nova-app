import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { InputComponent, CustomDatePickerComponent, DateRange, DateTimeResult } from 'cats-ui-lib';

@Component({
  selector: 'app-signupcomponent',
  imports: [FormsModule, ReactiveFormsModule, InputComponent, CustomDatePickerComponent],
  templateUrl: './signupcomponent.html',
  styleUrl: './signupcomponent.scss',
})
export class Signupcomponent {
  displayData($event: string | Date | DateRange | DateTimeResult) {
    throw new Error('Method not implemented.');
  }
  myform = new FormGroup({
    fname: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    pass: new FormControl(''),
    cpass: new FormControl(''),
    number: new FormControl(''),
    date: new FormControl(''),
  });

  onsubmit() {
    console.log('all input value founds', this.myform.value);
    this.myform.reset();
  }

  inputConfig: any = {
    type: 'text',
    placeholder: 'Enter value',
  };
}
