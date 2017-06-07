import { PhotoService } from './../../services/photo.service';
import { Photo } from './../../models/photo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'photo-row',
  templateUrl: './photo-row.component.html',
  styleUrls: ['./photo-row.component.css'],
  providers: [ PhotoService]
})
export class PhotoRowComponent implements OnInit {

  photoList: Photo[];
  photoListSorted: Photo[];
  photoListRanked: Photo[];

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    const _self = this;
    this.photoService.getPhotos().subscribe(
      (data) => {
        _self.photoList = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        _self.photoListSorted = _self.photoList.sort((a, b) => { return b.likes - a.likes;});

        this.photoListRanked = [];

        for (const index in _self.photoListSorted) {
          if (+index < 3) {
            _self.photoListRanked.push(_self.photoListSorted[index]);
          } else {
            break;
          }
        }
      }, (error) => { console.log(error);
      }
    );
  }

}
