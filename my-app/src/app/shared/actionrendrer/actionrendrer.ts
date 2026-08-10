import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogBoxService, InputComponent, CustomDatePickerComponent, DateRange, DateTimeResult } from 'cats-ui-lib';

@Component({
  selector: 'app-actionrendrer',
  imports: [FormsModule, ReactiveFormsModule, InputComponent, CustomDatePickerComponent],
  templateUrl: './actionrendrer.html',
  styleUrl: './actionrendrer.scss',
})
export class Actionrendrer {
  dialogRef: any;
  params: any;
  isSubmitted = false;

  @ViewChild('myTemplateupload') template!: TemplateRef<any>;

  constructor(private dialogBoxService: DialogBoxService) {}

  editForm = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    cpass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    date: new FormControl(''),
  });

  inputConfig: any = { type: 'text', placeholder: 'Enter value' };
  passwordConfig: any = { type: 'password', placeholder: 'Enter password' };

  openModal() {
    if (this.params?.data) {
      const data = this.params.data;
      this.editForm.patchValue(data);
    }
    this.dialogRef = this.dialogBoxService.open(this.template, {
      class: 'edit_modal',
      closeOnBackdropClick: false,
    });
  }

  close() {
    this.dialogRef?.close();
    this.editForm.reset();
    this.isSubmitted = false;
  }

  displayData($event: string | Date | DateRange | DateTimeResult) {}

  onUpdate() {
    this.isSubmitted = true;
    this.editForm.markAllAsTouched();
    if (this.editForm.invalid) return;
    console.log('Updated values:', this.editForm.value);
    this.close();
  }

   cellInit(params: any) {
    this.params = params   
    console.log('params:', this.params);
  }


}
