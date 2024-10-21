import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/LeaveManagement/login'
  dataa:string = "";

 login(email: string, password: string): string {
     const body = { email, password };
     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
 
     this.http.post<any>(this.apiUrl, body, { headers, withCredentials: true }).subscribe(data => {
       this.dataa = data;
     })
     return this.dataa;
   }
}
