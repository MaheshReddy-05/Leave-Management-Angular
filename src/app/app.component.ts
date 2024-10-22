import { Component } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LeaveManagement';

  constructor(public prv: DashboardService){}

  
}
