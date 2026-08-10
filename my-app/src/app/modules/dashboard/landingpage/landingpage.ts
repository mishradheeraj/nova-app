import { Component, OnInit, signal } from '@angular/core';
import { CatsDataGridComponent } from 'cats-data-grid';
import { ApiService } from '../../../service/api-servic';
import { Actionrendrer } from '../../../shared/actionrendrer/actionrendrer';

@Component({
  selector: 'app-landingpage',
  imports: [CatsDataGridComponent],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage implements OnInit {
  settingsClicked: boolean = false;
  totalRecords: number = 0;
  rowData: any[] = [];
  tableOption = signal({ parentRef: this });
  constructor(private service: ApiService) {}
  ngOnInit(): void {
    this.getAllProfiles();
  }

  onpagination(event: any) {
    console.log(event);
  }
  getAllProfiles() {
    this.service.getAllProfiles().subscribe({
      next: (res) => {
        this.rowData = res;
        console.log('rowData:', this.rowData);
        this.totalRecords = res.length;
      },
    });
  }

  coldefs = [
    {
      headerName: 'ID',
      fieldName: 'id',
    },
    {
      headerName: 'First Name',
      fieldName: 'fname',
    },
    {
      headerName: 'Email',
      fieldName: 'email',
    },
    {
      headerName: 'Username',
      fieldName: 'username',
    },
    {
      headerName: 'Password',
      fieldName: 'pass',
    },
    {
      headerName: 'Confirm Password',
      fieldName: 'cpass',
    },
    {
      headerName: 'Number',
      fieldName: 'number',
    },
    {
      headerName: 'Date',
      fieldName: 'date.date',
    },
    {
      headerName: 'Actions',
      cellRenderer: Actionrendrer,
    },
  ];
}
