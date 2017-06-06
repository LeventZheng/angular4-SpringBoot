import { User } from './../../models/user';
import { PhotoService } from './../../services/photo.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './../../services/comment.service';
import { Comment } from './../../models/comment';
import { Photo } from './../../models/photo';

@Component({
  selector: 'image-comments',
  templateUrl: './image-comments.component.html',
  styleUrls: ['./image-comments.component.css'],
  providers: [CommentService, UserService, PhotoService]
})
export class ImageCommentsComponent implements OnInit {
  @Input('photo') photo: Photo;
  user: User = new User;
  newComment = new Comment();

  constructor(
    private commentService: CommentService,
    private userService: UserService,
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    const _self = this;
    this.userService.getUserByName(localStorage.getItem('currentUserName')).subscribe(
      (user) => {
        _self.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
      }, (error) => { console.log(error);
      }
    );
  }

  onSubmit() {
    this.newComment.photo = this.photo;
    this.newComment.userName = this.newComment.userName;
    this.newComment.photoId = this.photo.photoId;
    const _self = this;
    this.commentService.addComment(this.newComment).subscribe(
      (photo) => {
        _self.photoService.getPhotoById(_self.photo.photoId).subscribe(
          (photo) => {
            _self.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body);
          }, (error) => { console.log(error);
          }
        );
      }, (error) => { console.log(error);
      }
    );
    this.newComment = new Comment();
  }

}
