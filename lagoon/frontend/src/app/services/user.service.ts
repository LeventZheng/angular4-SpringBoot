import { User } from './../models/user';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    getUserByName(userName: string) {
        const url = 'http://localhost:8080/rest/user/userName';
        const header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.post(url, userName, {headers: header});
    }

    updateUser(user: User) {
        const url = 'http://localhost:8080/rest/user/update';
        const header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.post(url, JSON.stringify(user), {headers: header});
    }
}
