import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:3000/';
  refreshProfiles$ = new Subject<void>();
  constructor(private http: HttpClient) {}

  createProfile(profileData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}profile`, profileData);
  }

  getAllProfiles(): Observable<any> {
    return this.http.get(`${this.apiUrl}profile`);
  }

  /* ---- EditProfile API ---- */
  editProfile(id: any, profileData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}profile/${id}`, profileData);
  }

  /* ---- DeleteProfile API ---- */
  deleteProfile(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}profile/${id}`);
  }
}
