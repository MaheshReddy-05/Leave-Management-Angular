import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
    private http: HttpClient,
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

  onSubmit(): void {
    if (this.leaveForm.valid) {
      const formData = this.leaveForm.value;
      this.http.post('blah/blah', formData).subscribe(
        response => {
          console.log('Form submitted successfully', response);
          this.closeModal(); 
        },
        error => {
          console.error('Error submitting form', error);
        }
      );
    }
  }
}
