import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-statu-tag',
  template: `<span [ngClass]="statusClass">{{ status }}</span>`,
  styleUrls: ['./statu-tag.component.css']
})
export class StatuTagComponent {
  @Input() status: any;

  get statusClass(): string {
    switch (this.status) {
      case 'pending':
        return 'status-Pending';
      case 'accepted':
        return 'status-Accepted';
      case 'rejected':
        return 'status-Rejected';
      default:
        return 'status-unknown';
    }
  }
}
