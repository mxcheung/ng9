import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AuthModule, LogLevel, OidcConfigService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getMessage(): string {
    return "LoginService Messages damienbod angular-auth-oidc-client v1.0.2";
  }


}
