import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../../services/leave.service';

@Component({
  selector: 'app-myleavestable',
  templateUrl: './myleavestable.component.html',
  styleUrl: './myleavestable.component.css'
})
export class MyleavestableComponent implements OnInit{
  allMyLeaves:any = [];
  
  constructor(private leavesService: LeaveService){}
  
  ngOnInit(): void {
    this.getAllMyLeaves('Pending');
  }

  getAllMyLeaves(leaveStatus:string){
    this.leavesService.getAllMyLeaves(leaveStatus).subscribe((data)=>{
      this.allMyLeaves = data
    })
  }
}
