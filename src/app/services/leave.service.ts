import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private apiUrl = 'http://localhost:8080/LeaveManagement/login';
  private applyLeaveApiUrl = 'http://localhost:8080/LeaveManagement/employees';
  private allLeavesAsMangerApiUrl = 'http://localhost:8080/LeaveManagement/leave_request';
  private leaveSummaryAsManagerApiUrl = 'http://localhost:8080/LeaveManagement/team_leaves_summary';
  constructor(private http: HttpClient) { }



  login(email: string, password: string): Observable<string> {
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrl, body, { headers, withCredentials: true });

  }

  applyLeave(leaveData:any):Observable<any>{

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.applyLeaveApiUrl, leaveData, { headers, withCredentials: true })
      
  }
  
  getAllMyLeaves(state:string='All'):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/LeaveManagement/employees?status=${state}`, { withCredentials: true });
  }
  
  getAllLeavesAsManager(state:string='all'):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/LeaveManagement/leave_request?status=${state}`, { withCredentials: true });
  }
  
  getLeaveSummaryAsManager():Observable<any>{
    return this.http.get<any>(this.leaveSummaryAsManagerApiUrl, { withCredentials: true });

  }
  
  updateLeaveAsManager(){

  }


}
