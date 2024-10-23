import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../../services/leave.service';

@Component({
  selector: 'app-myteamleaves',
  templateUrl: './myteamleaves.component.html',
  styleUrl: './myteamleaves.component.css'
})
export class MyteamleavesComponent implements OnInit{

  teamLeaveRequests:any = [];
  constructor(private leaveService: LeaveService){}

  ngOnInit(): void {
    this.getMyTeamLeaves();
  }
  
  getMyTeamLeaves(){
    this.leaveService.getAllLeavesAsManager().subscribe((data)=>{
      console.log(data);
      this.teamLeaveRequests = data;
    })
  }
  login(email:string,password:string){
    this.leaveService.login(email,password).subscribe((data)=>
    console.log(data))
  }

}
