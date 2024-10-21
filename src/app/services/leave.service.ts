import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http: HttpClient) { }
  applyLeave(leaveType: string,reason: string,
    fromDate: Date,toDate: Date,createdAt:string ,
    leaveCount: number, status:string =  "Pending"){

  }
  
  getAllLeaves(){
    let employeeLeaves:any;
    this.http.get('http://localhost:8080/LeaveManagement/employees', { withCredentials: true }).subscribe((data)=>{
      employeeLeaves = data;
    })
    return employeeLeaves;
  }
  getAllLeavesAsManager(){}


}
