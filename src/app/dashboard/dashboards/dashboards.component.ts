import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { DashboardService} from '../shared/dashboard.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value.$key == null)
    this.dashboardService.insertDashboard(form.value);
    else
    this.dashboardService.updateDashboard(form.value);
    this.resetForm(form);
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.dashboardService.selectedDashboard = {
      $key: null,
      equipoa: '',
      equipob: '',
      marcadora: '',
      marcadorb: '',
      fecha: '',
      tokens: '',
    }
  }

  onDelete(form: NgForm) {
    if (confirm('Desea eliminar este registro?') == true) {
      this.dashboardService.deleteDashboard(form.value.$key);
      this.resetForm(form);
    }
  }

}
