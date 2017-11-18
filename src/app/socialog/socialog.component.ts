import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

@Component({
  selector: 'app-socialog',
  templateUrl: './socialog.component.html',
  styleUrls: ['./socialog.component.css']
})
export class SocialogComponent implements OnInit {
  
  user: SocialUser;
  
    constructor(private authService: AuthService) { }
  
    ngOnInit() {
      this.authService.authState.subscribe((user) => {
        this.user = user;
      });
    }
  
    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }
  
    signInWithFB(): void {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
  
    signOut(): void {
      this.authService.signOut();
    }
  

}
