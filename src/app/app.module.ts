import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { APP_ROUTING } from './app.routes';
import { UserService } from './user.service'
import {AuthguardGuard} from './authguard.guard';

const appRoutes:Routes = [
 
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent,  canActivate: [AuthguardGuard]},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [
   UserService,
   AuthguardGuard 
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
