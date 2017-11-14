import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { DashboardService } from './shared/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers : [DashboardService]
})
export class DashboardComponent implements OnInit {

  constructor(private user:UserService, private dashboardService: DashboardService) { }

  ngOnInit() {
  }

}
