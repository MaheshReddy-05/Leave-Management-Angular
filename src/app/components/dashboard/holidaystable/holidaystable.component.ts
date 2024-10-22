import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-holidaystable',
  templateUrl: './holidaystable.component.html',
  styleUrl: './holidaystable.component.css'
})
export class HolidaystableComponent implements OnInit{

  holidays:any = [];
  constructor(private dashboardService:DashboardService){}

  ngOnInit(): void {
    this.getHolidays();
  }

  getHolidays():any{
    this.dashboardService.getHoliday().subscribe((data)=>{
      this.holidays = data
    })
  }

}
