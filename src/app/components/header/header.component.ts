import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private router: Router,private dashboardService:DashboardService) {
    
  }


  isMyDataActive(): boolean {
    return this.router.url.startsWith('/my-data');
  }

  isTeamActive(): boolean {
    return this.router.url.startsWith('/team');
  }
}
