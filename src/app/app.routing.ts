import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserLoginComponent} from './reg/user-login/user-login.component';
import {UserInfoComponent} from './reg/user-info/user-info.component';
//posiblemente importar el reg como tal para renderizar la vista

const routes: Routes = [
  {path: '', redirectTo: 'reg', pathMatch: 'full'},
  {path: 'reg', component: UserLoginComponent},
  {path: 'user', component: UserInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}