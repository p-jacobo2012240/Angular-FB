import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { Router } from '@angular/router';
import { UserloguedComponent } from '../userlogued/userlogued.component';
import { UserService } from '../user.service';
@Component({
  selector: 'app-socialog',
  templateUrl: './socialog.component.html',
  styleUrls: ['./socialog.component.css']
})
export class SocialogComponent implements OnInit {
  
  user: SocialUser;
  
    constructor(private authService: AuthService, private router: Router) { }
  
    ngOnInit() {
      this.authService.authState.subscribe((user) => {
        this.user = user;
      });
    }
  
    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      /*this.userr.setUserLoggedIn();
      this.router.navigate(['userlogued']);//esta linea pordria cambiar */ 
    }
  
    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
  
    signOut(): void {
      this.authService.signOut();
    }
  

}
