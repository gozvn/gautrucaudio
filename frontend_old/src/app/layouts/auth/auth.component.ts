import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardSidebar } from '../../modules/dashboard/pages/dashboard-sidebar/dashboard-sidebar';
import { DashboardHome } from '../../modules/dashboard/pages/dashboard-home/dashboard-home';

@Component({
  selector: 'app-auth',
  imports: [RouterModule,DashboardSidebar,DashboardHome],
  templateUrl: './auth.html',
})
export class layoutAuthComponent {
  
}

