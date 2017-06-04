import { AddPhotoService } from './../../services/add-photo.service';
import { UserService } from './../../services/user.service';
import { UploadPhotoService } from './../../services/upload-photo.service';
import { User } from './../../models/user';
import { Photo } from './../../models/photo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  newPhoto: Photo = new Photo();
  photoAdded = false;
  user: User;

  constructor(private uploadPhotoService: UploadPhotoService,
              private addPhotoService: AddPhotoService,
              private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    const _self = this;
    this.userService.getUserByName(localStorage.getItem('currentUserName')).subscribe(
      (user) => {
        _self.user = JSON.parse(JSON.stringify(user))._body;
        _self.newPhoto.user = _self.user;
        _self.addPhotoService.sendPhoto(_self.newPhoto).subscribe(
          (data) => {
            _self.photoAdded = true;
            _self.newPhoto = new Photo();
          }, (error) => { console.log(error);
          }
        );
      }, (error) => { console.log(error);
      }
    );
  }
}
