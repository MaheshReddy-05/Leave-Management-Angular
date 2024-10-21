import { Component,OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

interface leaveCard{
  leaveType: string,
  available: number,
  booked: number
}

@Component({
  selector: 'app-leavecard',
  templateUrl: './leavecard.component.html',
  styleUrl: './leavecard.component.css'
})


export class LeavecardComponent implements OnInit {

  // leavesData: leaveCard;
  leaveCards: leaveCard[]=[];
  
  constructor(public dashboardService: DashboardService){
  }

  ngOnInit(): void {
    this.leaveCards = this.dashboardService.getLeavesSummaryData();
  }

  

}
