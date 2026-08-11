import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  DialogBoxService,
  InputComponent,
  CustomDatePickerComponent,
  DateRange,
  DateTimeResult,
} from 'cats-ui-lib';
import { ApiService } from '../../service/api-servic';

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
  deleteName = '';

  @ViewChild('myTemplateupload') template!: TemplateRef<any>;
  @ViewChild('deleteTemplate') deleteTemplate!: TemplateRef<any>;

  constructor(
    private dialogBoxService: DialogBoxService,
    private profileService: ApiService,
  ) {}

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

  /* ---- To open the modal && patch the data in the form ---- */
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

  /* ---- To Edit the record ---- */
  onUpdate() {
    this.isSubmitted = true;
    this.editForm.markAllAsTouched();
    if (this.editForm.invalid) return;

    const id = this.params?.data?.id;
    const profileData = this.editForm.value;

    this.profileService.editProfile(id, profileData).subscribe({
      next: (res) => {
        console.log('Profile updated successfully', res);
        this.profileService.refreshProfiles$.next();
        this.close();
      },
      error: (err) => {
        console.error('Error updating profile', err);
        // optionally show an error message in the modal
      },
    });
  }

  /* ---- Delete record ---- */
  deleterecord() {
    this.deleteName = this.params?.data?.fname ?? '';
    //console.log('Recored deleted value founds::', this.deleteName);
    this.dialogRef = this.dialogBoxService.open(this.deleteTemplate, {
      class: 'delete_modal',
      closeOnBackdropClick: false,
    });
  }

  /* ----To Delete the Record ---- */
  confirmDelete() {
    const id = this.params?.data?.id;
    this.profileService.deleteProfile(id).subscribe({
      next: () => {
        this.profileService.refreshProfiles$.next();
        this.close();
      },
      error: (err) => console.error('Error deleting profile', err),
    });
  }

  cellInit(params: any) {
    this.params = params;
    console.log('params:', this.params);
  }

  isOffcanvasOpen = false;
  viewData: any = null;

  /* ---- To view the Records ---- */
  viewrecords() {
    this.viewData = this.params?.data;
    this.isOffcanvasOpen = true;
  }

  closeOffcanvas() {
    this.isOffcanvasOpen = false;
    this.viewData = null;
  }
}
