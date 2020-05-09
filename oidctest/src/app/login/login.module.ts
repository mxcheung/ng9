import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth/auth.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AuthService,
  ],
})
export class LoginModule { }
