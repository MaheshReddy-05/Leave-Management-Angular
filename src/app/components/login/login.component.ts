import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  text = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    
    localStorage.removeItem('userEmail');
    localStorage.removeItem('sessionExpiration');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get password() {
    return this.profileForm.get('password');
  }

  updateProfile() {
    if (this.profileForm.valid) {
      this.loginService.login(this.profileForm.value.email!, this.profileForm.value.password!).subscribe(
        (data) => {
          if (data === 'Valid') {
            localStorage.setItem('userEmail', 'randomEmail');
            const expirationTime = new Date().getTime() + 3600000; 
            localStorage.setItem('sessionExpiration', expirationTime.toString());
            this.router.navigate(['/my-data']);
          } else {
            this.text = "Invalid Credentials";
          }
        },
        (err) => {
          this.text = err;
        }
      );
    } else {
      this.text = "Please fill in all required fields correctly.";
    }
  }
}
