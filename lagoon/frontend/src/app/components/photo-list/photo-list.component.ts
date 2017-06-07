import { PhotoService } from './../../services/photo.service';
import { Router } from '@angular/router';
import { Photo } from './../../models/photo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
  providers: [ PhotoService]
})
export class PhotoListComponent implements OnInit {

  photos: Photo[];
  selectedPhoto: Photo;
  constructor(
    private router: Router,
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    const _self = this;
    this.photoService.getPhotos().subscribe(
      (data) => {
        this.photos = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }, (error) => { console.log(error);
      }
    );
  }

  onSelect(photo: Photo) {
    this.selectedPhoto = photo;
    this.router.navigate(['/image-detail', this.selectedPhoto.photoId]);
  }

}
