import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { DashboardService} from '../shared/dashboard.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  myHeaders: { [name: string]: any } = {
    'Authorization': 'MyToken',
    'Another Header': 'AnotherValue'
  };

  images = [];


  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.resetForm();
    setTimeout(()=>{  ///desde aqui
      this.images = [
        'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
        'https://pbs.twimg.com/profile_images/855073776215654400/oGEOJ2JU.jpg',
        {fileName: 'google-image.jpg', url: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
      ];
    }, 1000);// hasta aqui
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
