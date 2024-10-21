import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://localhost:8080/LeaveManagement/login';
  private employeeHadTeamApiUrl = 'http://localhost:8080/LeaveManagement/employee_had_team';
  private employeeGenderApiUrl = 'http://localhost:8080/LeaveManagement/gender';
  private leaveSummaryApiUrl = 'http://localhost:8080/LeaveManagement/leaves_summary';
  private holidaysApiUrl = 'http://localhost:8080/LeaveManagement/holidays';
  private recentFourLeavesApiUrl = 'http://localhost:8080/LeaveManagement/recent_leaves';
  private logoutApiUrl = 'http://localhost:8080/LeaveManagement/logout';
  
  
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<string> {
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrl, body, { headers, withCredentials: true });

  }
  
  ddoEmployeeHadTeam(): Observable<boolean> {
    return this.http.get<any>(this.employeeHadTeamApiUrl, { withCredentials: true })
      .pipe(
        map((response: any) => {
          return response === 'true';
        })
      );
  }

  getGender():Observable<string>{
    return this.http.get<any>(this.employeeGenderApiUrl,{withCredentials:true})
  }

  getLeaveSummary():Observable<any>{
    return this.http.get<any>(this.leaveSummaryApiUrl,{withCredentials:true});
  }

  getHoliday():Observable<any> {
    return this.http.get<any>(this.holidaysApiUrl, { withCredentials: true });
  }

  getTopFourApprovedLeaves():Observable<any>{
    return this.http.get<any>(this.recentFourLeavesApiUrl,{withCredentials:true})
  }

  logout():Observable<any>{
    return this.http.post(this.logoutApiUrl,{withCredientials:true});
  }
}
