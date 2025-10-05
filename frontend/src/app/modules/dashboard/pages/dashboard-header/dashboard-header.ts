import { Component } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-dashboard-header',
  imports: [],
  templateUrl: './dashboard-header.html',
  styleUrl: './dashboard-header.scss'
})
export class DashboardHeader {
    constructor ( private auth:AuthenticationService ){}
    logout(){
      this.auth.logout;
    }
}
