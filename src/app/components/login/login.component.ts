import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService,private router: Router){}

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  updateProfile(){
    this.loginService.login(this.profileForm.value.email!,this.profileForm.value.password!).subscribe((data)=>{
      if(data==='Valid') this.router.navigate(['/holidays'])
    })
  }
}
