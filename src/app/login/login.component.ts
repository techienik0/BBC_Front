import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  loginError: string | null = null;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      employeeId: ['', Validators.required],
      otp: ['', Validators.required]
    });
  }

  onLogin() {
    this.loading = true;
    this.loginError = null; 
    this.loginService.login(this.loginForm.value).subscribe(
      response => {
        this.loading = false;
        if (response.success) {
          this.router.navigate(['/dashboard']);
        } else {
          this.loginError = 'Invalid Employee ID or OTP. Please try again.';
        }
      },
      error => {
        this.loading = false;
        this.loginError = 'Login failed. Please check your credentials and try again.';
      }
    );
  }

  resendOtp() {
    // Logic to resend OTP
    this.loginService.resendOtp(this.loginForm.get('employeeId')?.value).subscribe(
      response => {
        alert('OTP has been resent to your registered mobile number/email.');
      },
      error => {
        alert('Failed to resend OTP. Please try again later.');
      }
    );
  }
}