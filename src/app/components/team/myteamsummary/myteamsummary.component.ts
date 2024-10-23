import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../../services/leave.service';

@Component({
  selector: 'app-myteamsummary',
  templateUrl: './myteamsummary.component.html',
  styleUrl: './myteamsummary.component.css'
})
export class MyteamsummaryComponent implements OnInit{
  teamLeaveSummary:any =[];
  constructor(private leaveService: LeaveService){
  }

  ngOnInit(): void {
    this.getTeamLeaveSummary();
  }
  
  getTeamLeaveSummary(){
    this.leaveService.getLeaveSummaryAsManager().subscribe((data)=>{
      console.log(data)
      this.teamLeaveSummary = data;
    })
  }
}
