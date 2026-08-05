import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  createProfile(profileData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}profile`, profileData);
  }

  getAllProfiles(): Observable<any> {
    return this.http.get(`${this.apiUrl}profile`);
  }
}
