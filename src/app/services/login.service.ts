import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private loginApiUrl = 'http://localhost:8080/LeaveManagement/login'
  dataa:string = "";
  
 login(email: string, password: string):Observable<any> {
     const body = { email, password };
     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
 
     return this.http.post<any>(this.loginApiUrl, body, { headers, withCredentials: true });
   }
}
