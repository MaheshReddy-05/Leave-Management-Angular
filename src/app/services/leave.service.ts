import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private applyLeaveApiUrl = 'http://localhost:8080/LeaveManagement/employees';
  private allMyLeavesApiUrl = 'http://localhost:8080/LeaveManagement/employees';
  private allLeavesAsMangerApiUrl = 'http://localhost:8080/LeaveManagement/leave_request';
  private leaveSummaryAsManagerApiUrl = 'http://localhost:8080/LeaveManagement/team_leaves_summary';
  constructor(private http: HttpClient) { }


  applyLeave(leaveData:any):Observable<any>{

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.applyLeaveApiUrl, leaveData, { headers, withCredentials: true })

      // const leaveType = document.getElementById('leave-type').value;
      // const reason = document.getElementById('reason').value;
      // const fromDate = document.getElementById('from-date').value;
      // const toDate = document.getElementById('to-date').value;
      // const leaveCount = calculateWeekdays(fromDate, toDate);

      //   const leaveData = {
      //     leaveType: leaveType,
      //     reason: reason,
      //     fromDate: fromDate,
      //     toDate: toDate,
      //     createdAt: new Date().toISOString().split('T')[0],
      //     leaveCount: leaveCount,
      //     status: "Pending"
      // };


  }
  
  getAllMyLeaves():Observable<any>{
    return this.http.get<any>(this.allMyLeavesApiUrl, { withCredentials: true });
  }
  
  getAllLeavesAsManager():Observable<any>{
    return this.http.get<any>(this.allLeavesAsMangerApiUrl, { withCredentials: true });
  }
  
  getLeaveSummaryAsManager():Observable<any>{
    return this.http.get<any>(this.leaveSummaryAsManagerApiUrl, { withCredentials: true });

  }
  
  updateLeaveAsManager(){

  }


}
