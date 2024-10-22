import { Component } from '@angular/core';
import { LeaveService } from '../../../services/leave.service';

@Component({
  selector: 'app-myteamsummary',
  templateUrl: './myteamsummary.component.html',
  styleUrl: './myteamsummary.component.css'
})
export class MyteamsummaryComponent {

  teamLeaveSummary:any;

  constructor(private leaveService: LeaveService){}
  getTeamLeaveSummary(){
    this.leaveService.getLeaveSummaryAsManager().subscribe((data)=>{
      this.teamLeaveSummary = data;
    })
  }

  // Temp Remove
  login(email:string,password:string){
    this.leaveService.login(email,password).subscribe((data)=>
      console.log(data)
    )
  }
}

// name: member.employeeName,
// compensatoryOffAllowed: 5, 
// compensatoryOffTaken: member.compensatoryOff,
// lossOfPayAllowed: 5,
// lossOfPayTaken: member.lossOffPay,
// personalTimeOffAllowed: 15,
// personalTimeOffTaken: member.personalTimeOff,
// gender: member.gender,
// maternityLeaveTaken: member.gender === 'Female' ? member.maternityLeave : null,
// paternityLeaveTaken: member.gender === 'Male' ? member.paternityLeave : null
// };
