import { Comment } from './../models/comment';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentService {

    constructor(private http: Http) { }

    addComment(comment: Comment) {
        const url = 'http://localhost:8080/rest/comment/add';
        const header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.post(url, JSON.stringify(comment), {headers: header});
    }

}
