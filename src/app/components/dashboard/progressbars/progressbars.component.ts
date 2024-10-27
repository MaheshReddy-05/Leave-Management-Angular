import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progressbars',
  templateUrl: './progressbars.component.html',
  styleUrl: './progressbars.component.css'
})


export class ProgressbarsComponent  implements OnChanges {
  @Input() currentValue: number = 0;
  @Input() totalValue: number = 100;

  // Calculate the stroke offset based on current and total values
  calculateDashOffset(current: number, total: number): number {
    const percentage = (current / total) * 100;
    const circumference = 2 * Math.PI * 135; // 2 * PI * radius
    return circumference - (circumference * percentage) / 100;
  }

  ngOnChanges() {
    // This triggers recalculating on changes to inputs if needed
  }
}

