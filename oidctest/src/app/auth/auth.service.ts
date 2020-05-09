import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public oidcSecurityService: OidcSecurityService) { }


  getMessage(): string {
    return "LoginService Messages";
  }

  login() {
    console.log('authservice start login');
    this.oidcSecurityService.authorize();
    console.log('authservice end login');
}

}
