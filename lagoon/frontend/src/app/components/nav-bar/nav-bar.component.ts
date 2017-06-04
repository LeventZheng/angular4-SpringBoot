import { Component, OnInit } from '@angular/core';

import { LoginService } from './../../services/login.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [LoginService]
})
export class NavBarComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onClick() {
    if (this.loginService.checkLogin()) {
      this.loginService.logout();
    }
  }

}
