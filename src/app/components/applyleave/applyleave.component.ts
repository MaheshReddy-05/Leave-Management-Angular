import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;

  @Input() leaveSummary:any
  maxLeaves:any = {
    lossOffPay: 5,
    maternityLeave: 90,
    compensatoryOff: 5,
    paternityLeave: 9,
    personalTimeOff: 15
  }
  leaveForm!: FormGroup;
  gender: string = 'Male';
  errorMessage: string = '';
  leaveCountLimit: number = 5;


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

    this.leaveForm.get('toDate')?.valueChanges.subscribe(() => {
      this.validateDates();
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
      this.leaveForm.reset();
      this.errorMessage = '';
    }
  }

  validateDates() {
    const fromDate = this.leaveForm.get('fromDate')?.value;
    const toDate = this.leaveForm.get('toDate')?.value;

    if (fromDate && toDate && new Date(toDate) < new Date(fromDate)) {
      this.errorMessage = 'To Date cannot be earlier than From Date.';
    } else {
      this.errorMessage = '';
    }
  }

  getWeekdays(fromDate: any, toDate: any): number {
    const start = new Date(fromDate);
    const end = new Date(toDate);
    let leaveCount = 0;

    while (start <= end) {
      const dayOfWeek = start.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        leaveCount++;
      }
      start.setDate(start.getDate() + 1);
    }

    return leaveCount;
  }

  
  onSubmit(): void {
    function changeLeaveTypeCase(value:string){
      if(value === 'Compensatory Off') return 'compensatoryOff';
      if(value === 'Loss of Pay') return 'lossOffPay';
      if(value === 'Personal Time Off') return 'personalTimeOff';
      if(value === 'Paternity Leave') return 'paternityLeave';
      if(value === 'Maternity Leave') return 'maternityLeave';
      return '';
    }
    if (this.leaveForm.valid) {
      let formData = this.leaveForm.value;
      const leaveCount = this.getWeekdays(formData.fromDate, formData.toDate);
      
      const maxLeaveCount = this.maxLeaves[changeLeaveTypeCase(formData.leaveType)];
      const usedLeaveCount = this.leaveSummary[changeLeaveTypeCase(formData.leaveType)];

      
      if (leaveCount > (maxLeaveCount - usedLeaveCount)) {
        this.errorMessage = `Leave count exceeds the limit of ${maxLeaveCount - usedLeaveCount}`;
        return;
      }
  
      const customData = {
        leaveCount: leaveCount,
        createdAt: new Date().toISOString().split('T')[0],
        status: 'Pending'
      };
  
      const finalFormData = { ...formData, ...customData };
      this.leaveService.applyLeave(finalFormData).subscribe((data) => {
        console.log(data);
        this.closeModal();
      });
    }
  }
  
}
