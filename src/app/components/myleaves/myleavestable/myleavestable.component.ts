import { Component } from '@angular/core';
import { LeaveService } from '../../../services/leave.service';

@Component({
  selector: 'app-myleavestable',
  templateUrl: './myleavestable.component.html',
  styleUrl: './myleavestable.component.css'
})
export class MyleavestableComponent {
  allMyLeaves:any = [];
  
  constructor(private leavesService: LeaveService){}
  
  getAllMyLeaves(){
    this.leavesService.getAllMyLeaves().subscribe((data)=>{
      console.log(data)
      this.allMyLeaves = data
    })
  }

  // Remove this
  login(email:string,password:string){
    this.leavesService.login(email,password).subscribe((data)=> console.log(data))
  }

}
