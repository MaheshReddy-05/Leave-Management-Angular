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
    this.getMyTeamLeaves('Pending');
  }
  updateLeaveStatus(leaveId:any,leaveStatus:string){

    this.leaveService.updateLeaveAsManager(leaveId,leaveStatus).subscribe((data)=>{
      this.getMyTeamLeaves('Pending');
    })
    
  }
  getMyTeamLeaves(leaveStatus:string){
    this.leaveService.getAllLeavesAsManager(leaveStatus).subscribe((data)=>{
      this.teamLeaveRequests = data;
    })
  }
  login(email:string,password:string){
    this.leaveService.login(email,password).subscribe()
  }

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
