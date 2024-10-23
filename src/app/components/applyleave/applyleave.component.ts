import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {
  leaveForm!: FormGroup;
  gender: string = 'Male';
  
  @ViewChild('modal') modal!: ElementRef;

  private bootstrapModal: any;

  constructor(
    private fb: FormBuilder, 
    private leaveService: LeaveService
  ) {}

  ngOnInit(): void {
    this.leaveForm = this.fb.group({
      leaveType: ['', Validators.required],
      reason: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });
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
  getWeekdays(fromDate:any, toDate:any) {

    const start = new Date(fromDate);
    const end = new Date(toDate);
    let leaveCount = 0;

    while (start <= end) {
        // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        const dayOfWeek = start.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            leaveCount++;
        }
        start.setDate(start.getDate() + 1);
    }

    return leaveCount;
}
  onSubmit(): void {
    if (this.leaveForm.valid) {
      let formData = this.leaveForm.value;
      const customData = {
        leaveCount: this.getWeekdays(formData.fromDate, formData.toDate),
        createdAt: new Date().toISOString().split('T')[0],  // format date as YYYY-MM-DD
        status: 'Pending'
      };
      const finalFormData = { ...formData, ...customData };
      this.leaveService.applyLeave(finalFormData).subscribe((data)=>{
        console.log(data);
      })
    }
  }
}
