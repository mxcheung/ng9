import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getMessage(): string {
    return "LoginService Messages damienbod angular-auth-oidc-client";
  }
}
