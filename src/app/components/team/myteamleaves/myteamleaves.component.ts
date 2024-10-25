import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LeaveService } from '../../../services/leave.service';

@Component({
  selector: 'app-myteamleaves',
  templateUrl: './myteamleaves.component.html',
  styleUrl: './myteamleaves.component.css'
})
export class MyteamleavesComponent implements OnInit{

  teamLeaveRequests:any = [];
  @ViewChild('modal') modal!: ElementRef;

  constructor(private leaveService: LeaveService){}

  private bootstrapModal: any;

  ngOnInit(): void {
    this.getMyTeamLeaves();
  }
  updateLeaveStatus(leaveId:any,leaveStatus:string){

    this.leaveService.updateLeaveAsManager(leaveId,leaveStatus).subscribe((data)=>{
      console.log(data);
      this.getMyTeamLeaves();
    })
    
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
  // Model Code

  triggerModalOpen(): void {
    this.openModal();
  }

  openModal(): void {
      import('bootstrap').then(bootstrap => {
        this.bootstrapModal = new bootstrap.Modal(this.modal.nativeElement);
        this.bootstrapModal.show();
      });
  }

  closeModal(): void {
    if (this.bootstrapModal) {
      this.bootstrapModal.hide();
    }
  }

  onSubmit(): void {
    
  }

}
