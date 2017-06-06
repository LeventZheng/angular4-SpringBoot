import { PhotoService } from './../../services/photo.service';
import { UserService } from './../../services/user.service';
import { Photo } from './../../models/photo';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-album',
  templateUrl: './my-album.component.html',
  styleUrls: ['./my-album.component.css'],
  providers: [PhotoService, UserService]
})
export class MyAlbumComponent implements OnInit {

  private photos: Photo[];
  private user;
  private selectedPhoto: Photo;

  constructor(
    private photoService: PhotoService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    const _self = this;
    this.userService.getUserByName(localStorage.getItem('currentUserName')).subscribe(
      (user) => {
        _self.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        _self.photoService.getPhotoByUser(_self.user).subscribe(
          (photos) => {
            _self.photos = JSON.parse(JSON.parse(JSON.stringify(user))._body).photoList;
          }
        );
      }, (error) => { console.log(error);
      }
    );
  }

  onSelect(photo: Photo) {
    this.selectedPhoto = photo;
    this.router.navigate(['/image-detail', this.selectedPhoto.photoId]);
  }

}
