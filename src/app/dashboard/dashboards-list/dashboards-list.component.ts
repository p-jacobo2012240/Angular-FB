import { Component, OnInit } from '@angular/core';
import { DashboardService} from '../shared/dashboard.service';
import { Dashboard} from '../shared/dashboard.model';

@Component({
  selector: 'app-dashboards-list',
  templateUrl: './dashboards-list.component.html',
  styleUrls: ['./dashboards-list.component.css']
})
export class DashboardsListComponent implements OnInit {
  dashboardList: Dashboard[];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    var x = this.dashboardService.getData();
    x.snapshotChanges().subscribe(item => {
      this.dashboardList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.dashboardList.push(y as Dashboard);
      });
    });
  }

  onItemClick(emp : Dashboard){
    this.dashboardService.selectedDashboard = Object.assign({},emp);
  }

}
