import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardService } from './services/dashboard.service';
import { LeaveService } from './services/leave.service';
import { LoginService } from './services/login.service';
import { LeavecardComponent } from './components/dashboard/leavecard/leavecard.component';
import { HolidaystableComponent } from './components/dashboard/holidaystable/holidaystable.component';
import { RecentmyleavesComponent } from './components/dashboard/recentmyleaves/recentmyleaves.component';
import { MyleavestableComponent } from './components/myleaves/myleavestable/myleavestable.component';
import { provideHttpClient, withFetch } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { MyteamleavesComponent } from './components/team/myteamleaves/myteamleaves.component';
import { MyteamsummaryComponent } from './components/team/myteamsummary/myteamsummary.component';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ApplyleaveComponent } from './components/dashboard/applyleave/applyleave.component';
import { HeaderComponent } from './components/header/header.component';
import { AlldashboardComponent } from './components/alldashboard/alldashboard.component';
import { LeaveactionssummaryComponent } from './components/team/leaveactionssummary/leaveactionssummary.component';
import { ProgressbarsComponent } from './components/dashboard/progressbars/progressbars.component';
import { AuthService } from './services/auth.service';
import { StatusTagModule } from 'status-tag';
import { TreeModule } from 'primeng/tree';
// import { StatusTagModule } from '../../projects/status-tag/src/lib/status-tag.module';

const routes: Routes = [
  {
    path: 'my-data',
    canActivate: [AuthService],
    children: [
      { path: 'leave-summary', component: AlldashboardComponent },
      { path: 'leave-requests', component: MyleavestableComponent },
      { path: '', redirectTo: 'leave-summary', pathMatch: 'full' }
    ]
  },
  {
    path: 'team',
    canActivate: [AuthService],
    children: [
      { path: 'team-leaves', component: MyteamleavesComponent },
      { path: 'team-summary', component: MyteamsummaryComponent },
      { path: '', redirectTo: 'team-leaves', pathMatch: 'full' }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', redirectTo:'login', pathMatch: 'full'},
  { path: '**', redirectTo:'login', pathMatch: 'full'},

];





@NgModule({
  declarations: [
    AppComponent,
    LeavecardComponent,
    HolidaystableComponent,
    RecentmyleavesComponent,
    MyleavestableComponent,
    MyteamleavesComponent,
    MyteamsummaryComponent,
    LoginComponent,
    ApplyleaveComponent,
    HeaderComponent,
    AlldashboardComponent,
    LeaveactionssummaryComponent,
    ProgressbarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    StatusTagModule,
    TreeModule

  ],
  providers: [
    provideClientHydration(),
    DashboardService,
    LeaveService,
    LoginService,
    provideHttpClient(withFetch()),
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }