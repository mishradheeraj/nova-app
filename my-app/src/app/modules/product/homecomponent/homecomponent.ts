import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DialogBoxService } from 'cats-ui-lib';

@Component({
  selector: 'app-homecomponent',
  imports: [],
  templateUrl: './homecomponent.html',
  styleUrl: './homecomponent.scss',
})
export class Homecomponent {
  dialogRef: any;
  @ViewChild('myTemplateupload') template!: TemplateRef<any>;
  constructor(private dialogBoxService: DialogBoxService) {}

  openModal() {
    this.dialogRef = this.dialogBoxService.open(this.template, {
      class: 'open-ticket-modal',
      closeOnBackdropClick: false,
    });
  }

  close() {
    this.dialogRef?.close();
  }
}
