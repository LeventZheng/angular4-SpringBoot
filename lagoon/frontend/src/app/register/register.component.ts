import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';
import { User } from './../models/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User = new User();
  registerd = false;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.httpService.sendUser(this.newUser).subscribe((data) => {
      this.registerd = true;
      this.newUser = new User();
    }, (error) => {console.log(error);
    });
  }

}
