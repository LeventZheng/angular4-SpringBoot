import { RegisterService } from './../../services/register.service';
import { Component, OnInit } from '@angular/core';

import { User } from './../../models/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  newUser: User = new User();
  registerd = false;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.registerService.sendUser(this.newUser).subscribe(
      (data) => {
        this.registerd = true;
        this.newUser = new User();
      }, (error) => {console.log(error);
    });
  }

}
