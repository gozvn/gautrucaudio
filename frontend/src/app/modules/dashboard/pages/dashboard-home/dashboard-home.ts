import { Component } from '@angular/core';
import { DashboardHeader } from '../dashboard-header/dashboard-header';
import { DashboardSidebar } from '../dashboard-sidebar/dashboard-sidebar';
@Component({
  selector: 'app-dashboard-home',
  imports: [DashboardHeader,DashboardSidebar],
  templateUrl: './dashboard-home.html',
  styleUrls: ['./dashboard-home.scss','../dashboard-header/dashboard-header.scss'],
})
export class DashboardHome {

}
