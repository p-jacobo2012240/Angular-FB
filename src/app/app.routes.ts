import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import { RegComponent} from './reg/reg.component'
//import {AuthGuardService} from './services/auth-guard.service';
//import {ProfileComponent} from './components/profile/profile.component';
import {AuthguardGuard} from './authguard.guard';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent,  canActivate: [AuthguardGuard]},
  { path: 'reg', component: RegComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);