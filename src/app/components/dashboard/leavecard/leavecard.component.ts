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

  leaveCards:any={
    employeeId: 0,
    lossOffPay: 0,
    maternityLeave: 0,
    compensatoryOff: 0,
    paternityLeave: 0,
    personalTimeOff: 0
  };
  
  employeeDetails = {
    employeeName: "Blah",
    employeeGender : "Female"
  }

  
  
  constructor(public dashboardService: DashboardService){
  }

  ngOnInit(): void {
  }
  
  login(email:string,password:string){
    this.dashboardService.login(email,password).subscribe((data)=> console.log(data))
  }

  getLeaveSummary(){
    this.dashboardService.getLeaveSummary().subscribe(
      {
        next: (data)=> {
          this.leaveCards = data;
          console.log(data)
        }
      }
    )
  }
  getGender(){
    this.dashboardService.getGender().subscribe((data)=>{

      let genderName: Array<string> = data.split(" ");
      this.employeeDetails.employeeGender = genderName[0];
      this.employeeDetails.employeeName = genderName[1];
    }
    )
  }


  

}
