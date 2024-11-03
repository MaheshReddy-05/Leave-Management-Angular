import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    
      localStorage.removeItem('userEmail');
    
  }

  updateProfile() {
    this.loginService.login(this.profileForm.value.email!, this.profileForm.value.password!).subscribe((data) => {
      if (data === 'Valid') {
        localStorage.setItem('userEmail', this.profileForm.value.email!);
        this.router.navigate(['/my-data']);
      }
    });
  }
}
