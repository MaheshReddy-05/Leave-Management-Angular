import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://localhost:8080/LeaveManagement/login';
  dataa: string = "";

  constructor(private http: HttpClient) { }

  login(email: string, password: string): string {
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<any>(this.apiUrl, body, { headers, withCredentials: true }).subscribe(data => {
      this.dataa = data;
    })
    return this.dataa;
  }


  getHoliday() {
    let holidays;
    this.http.get('http://localhost:8080/LeaveManagement/holidays', { withCredentials: true })
      .subscribe(data => {
        holidays = data;
        console.log(holidays)
      });

      return holidays;
  }
  logout(){
    this.http.post('http://localhost:8080/LeaveManagement/logout',{withCredientials:true}).subscribe(data=>{
      console.log(data);
    })
  }

  getGender(){
    let employeeGender;
    this.http.get('http://localhost:8080/LeaveManagement/gender',{withCredentials:true}).subscribe(data=>{
      employeeGender = data;
    })
    return employeeGender;
  }
  getLeaveSummary(){
    let allLeavesSummary:any;
    this.http.get('http://localhost:8080/LeaveManagement/leaves_summary',{withCredentials:true}).subscribe(data=>{
      allLeavesSummary = data;
    })
    return allLeavesSummary;
  }
  getTopFourApprovedLeaves(){
    let recentTopFourLeaves:any
    this.http.get('http://localhost:8080/LeaveManagement/recent_leaves',{withCredentials:true}).subscribe(data=>{
      recentTopFourLeaves = data;
    })
    return recentTopFourLeaves;
  }

  doEmployeeHadTeam(){
    let hadTeam:any;
    this.http.get('http://localhost:8080/LeaveManagement/employee_had_team', { withCredentials: true })
    .subscribe(data=>
      hadTeam = data
    )
    return hadTeam;
  }

  getLeavesSummaryData(){
    return [
      {
        leaveType: 'Compensatory Off',
        available: 5,
        booked: 2
      },
      {
        leaveType: 'Loss of Pay',
        available: 5,
        booked: 2
      },
      {
        leaveType: 'Personal Time Off',
        available: 5,
        booked: 2
      },
      {
        leaveType: 'Paternity Leave',
        available: 5,
        booked: 2
      }
    ];
  }
}
