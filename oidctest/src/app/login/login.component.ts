import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: String;

  constructor(private oidcSecurityService: OidcSecurityService, private authService: AuthService) { }

  ngOnInit(): void {
      this.message = 'hello';
      this.message = this.authService.getMessage();

      
      this.oidcSecurityService
      .checkAuth()

      .subscribe((isAuthenticated) => {
        if (!isAuthenticated) {
          console.log('isAuthenticated 1.1 - ' + isAuthenticated);
          console.log('start login');
          this.authService.login();
          console.log('start login 1.2');
        }
        if (isAuthenticated) {
          //      this.navigateToStoredEndpoint();
          console.log('isAuthenticated 1.2 - ' + isAuthenticated);
        }
      });
  }

}
