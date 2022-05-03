import { LoginAuthService } from './../login-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loginAuthService: LoginAuthService) { }

  ngOnInit() {
    this.loginAuthService.allowloginPage = false;
  }

}