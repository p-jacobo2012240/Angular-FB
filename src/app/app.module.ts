import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { APP_ROUTING } from './app.routes';
import {AppRoutingModule} from './app.routing';
import { UserService } from './user.service'
import {AuthguardGuard} from './authguard.guard';
import { DashboardsComponent } from './dashboard/dashboards/dashboards.component';
import { DashboardsListComponent } from './dashboard/dashboards-list/dashboards-list.component';
import {environment} from '../environments/environment';
import { RegComponent } from './reg/reg.component';
import { UserInfoComponent } from './reg/user-info/user-info.component';
import { UserLoginComponent } from './reg/user-login/user-login.component';
import { HttpModule } from '@angular/http';
import {AuthService} from './reg/auth.service';
import { SocialogComponent } from './socialog/socialog.component';
//LOGUEO POR FACEBOOK Y GOOGLE
import { SocialLoginModule } from "angular4-social-login";
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

const appRoutes:Routes = [
 
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent,  canActivate: [AuthguardGuard]},
    { path: 'reg', component: RegComponent},
    { path: 'socialog', component: SocialogComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  
]
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("127514434597954")
  }
]);

export function provideConfig (){
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    NavbarComponent,
    DashboardsComponent,
    DashboardsListComponent,
    RegComponent,
    UserInfoComponent,
    UserLoginComponent,
    SocialogComponent
    

    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    AngularFireAuthModule,
    SocialLoginModule
  ],
  providers: [
   {
    provide: AuthServiceConfig,
    useFactory: provideConfig
   },
    UserService,
   AuthguardGuard,
   AuthService
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
