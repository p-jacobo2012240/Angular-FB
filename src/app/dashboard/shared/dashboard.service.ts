import { Injectable } from '@angular/core';
import { Dashboard } from './dashboard.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class DashboardService {
  dashboardList: AngularFireList<any>;
  selectedDashboard : Dashboard = new Dashboard();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.dashboardList = this.firebase.list('Admin-Partidos');
    return this.dashboardList;
  }
  insertDashboard(dashboard : Dashboard) {
    this.dashboardList.push({
      equipoa: dashboard.equipoa,
      equipob: dashboard.equipob,
      marcadora: dashboard.marcadora,
      marcadorb: dashboard.marcadorb,
      fecha: dashboard.fecha,
      tokens : dashboard.tokens 
    });
  }
  updateDashboard(dsh : Dashboard){
    this.dashboardList.update(dsh.$key,{
     equipoa: dsh.equipoa,
     equipob: dsh.equipob,
     marcadora: dsh.marcadora,
     marcadorb: dsh.marcadorb,
     fecha: dsh.fecha,
     tokens: dsh.tokens
    })
 }

 deleteDashboard(key : string){
   this.dashboardList.remove(key);
 }


}
