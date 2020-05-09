
import { LoginModule } from './login/login.module';

import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule, EventTypes, LogLevel, OidcConfigService, PublicEventsService } from 'angular-auth-oidc-client';
import { filter } from 'rxjs/operators';
import { AppComponent } from './app.component';
import { routing } from './app.routes';

export function configureAuth(oidcConfigService: OidcConfigService) {
  return () =>
      oidcConfigService.withConfig({
          stsServer: 'https://offeringsolutions-sts.azurewebsites.net',
          redirectUrl: 'http://localhost:4200',
          clientId: 'client',
          scope: 'openid profile email',
          responseType: 'code',
          triggerAuthorizationResultEvent: true,
          postLogoutRedirectUri: 'http://localhost:4200/unauthorized',
          startCheckSession: false,
          silentRenew: true,
          silentRenewUrl: 'http://localhost:4200/silent-renew.html',
          postLoginRoute: '/home',
          forbiddenRoute: '/',
          unauthorizedRoute: '/',
          logLevel: LogLevel.Debug,
          historyCleanupOff: true,
          // iss_validation_off: false
          // disable_iat_offset_validation: true
      });
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    LoginModule,
    HttpClientModule,
    AuthModule.forRoot(),
  ],
  providers: [
    OidcConfigService,
    {
        provide: APP_INITIALIZER,
        useFactory: configureAuth,
        deps: [OidcConfigService],
        multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
