import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from './../../models/user';
import { Photo } from './../../models/photo';
import { UserService } from './../../services/user.service';
import { PhotoService } from './../../services/photo.service';

@Component({
  selector: 'image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css'],
  providers: [PhotoService, UserService]
})
export class ImageDetailComponent implements OnInit {

  photo: Photo = new Photo;
  user: User;
  like: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      const photoId = +params['id'];
      const _self = this;
      this.photoService.getPhotoById(photoId).subscribe(
        (photo) => {
          _self.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body);
          _self.userService.getUserByName(localStorage.getItem('currentUserName')).subscribe(
            (user) => {
              _self.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
              if(_self.user.likedPhotoList.filter((photo) => {
                photo.photoId == _self.photo.photoId
              })[0]) {
                _self.like = 'Unlike';
              } else {
                _self.like = 'Like';
              }
            }, (error) => { console.log(error);
            }
          );
        }, (error) => { console.log(error);
        }
      );
    });
  }

  goBack() {
    window.history.back();
  }

  likeDisplay() {
    if (this.like === 'Like') {
      this.like = 'Unlike';
      this.user.likedPhotoList.push(this.photo);
      this.photo.likes += 1;
    } else {
      this.like = 'Like';
      for (let i = 0; i < this.user.likedPhotoList.length; i++) {
        if (this.user.likedPhotoList[i].photoId == this.photo.photoId) {
          this.user.likedPhotoList.splice(i, 1);
        }
      }
      this.photo.likes -= 1;
    }
    this.userService.updateUser(this.user).subscribe();
    this.photoService.updatePhoto(this.photo).subscribe();
  }

}
