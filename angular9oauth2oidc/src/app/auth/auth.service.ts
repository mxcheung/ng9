import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getMessage(): string {
    return "LoginService Messages - using manfredsteyer angular-oauth2-oidc ";
  }
}
