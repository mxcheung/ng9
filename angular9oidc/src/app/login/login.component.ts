import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: String;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
      this.message = 'hello';
      this.message = this.authService.getMessage();
  }

}
