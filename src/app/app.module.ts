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
import { ApplyleaveComponent } from './components/applyleave/applyleave.component';


const routes: Routes = [
  { path: 'leavessummary', component:LeavecardComponent },
  { path: 'holidays', component:HolidaystableComponent },
  { path: 'recentleaves', component:RecentmyleavesComponent },
  { path: 'myallleaves', component:MyleavestableComponent },
  { path: 'myteamleaves', component:MyteamleavesComponent },
  { path: 'myteamleavessummary', component:MyteamsummaryComponent },
  { path: 'login', component:LoginComponent },

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
    ApplyleaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    // HttpClientModule

  ],
  providers: [
    provideClientHydration(),
    DashboardService,
    LeaveService,
    LoginService,
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
