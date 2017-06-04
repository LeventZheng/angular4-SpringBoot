import { Headers, Http } from '@angular/http';
import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {

    constructor(private http: Http) { }

    getPhotoByUser(user: User) {
        const url = 'http://localhost:8080/rest/photo/user';
        const header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.post(url, JSON.stringify(user), { headers: header });
    }

}
