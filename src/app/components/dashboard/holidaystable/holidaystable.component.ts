import { Component } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-holidaystable',
  templateUrl: './holidaystable.component.html',
  styleUrl: './holidaystable.component.css'
})
export class HolidaystableComponent {

  constructor(private dashboardService:DashboardService){}

  getHolidays(){
    return this.dashboardService.getHoliday();
  }

}
