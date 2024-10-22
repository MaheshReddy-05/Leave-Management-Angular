import { Component } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-recentmyleaves',
  templateUrl: './recentmyleaves.component.html',
  styleUrl: './recentmyleaves.component.css'
})
export class RecentmyleavesComponent {
  constructor(private dashboardService: DashboardService){}

  // {
  //   leaveType:'PTO',
  //   reason:'Blah',
  //   fromDate:'Blah',
  //   toDate:'Blah',
  //   leaveCount:'Blah'
  // }

  topFourLeaves:any = [];
  getTopFourLeaves(){
    this.dashboardService.getTopFourApprovedLeaves().subscribe((data)=>{
      this.topFourLeaves = data;
    })
  }

  //Remove Later
  login(email:string,password:string){
    this.dashboardService.login(email,password).subscribe((data)=> console.log(data))
  }

}
