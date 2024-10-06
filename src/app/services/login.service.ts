import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://bbc.com/api';

  constructor(private http: HttpClient) {}

  login(credentials: { employeeId: string; otp: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  resendOtp(employeeId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/resend-otp`, { employeeId });
  }
}
