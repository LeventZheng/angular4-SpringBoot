import { User } from './../models/user';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    getUserByName(userName: string) {
        const url = 'http://localhost:8080/rest/user/username';
        const header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.post(url, userName, {headers: header});
    }
}
