import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    constructor(private http: Http) { }
    sendCredentials(model) {
        const tokenUrl = 'http://localhost:8080/user/login';
        const header1 = new Headers({'Content-Type': 'application/json'});

        return this.http.post(tokenUrl, JSON.stringify(model), {headers: header1});
    }

    sendToken(token) {
        const userUrl = 'http://localhost:8080/rest/user/users';
        const header2 = new Headers({'Authorization': 'Bearer ' + token});

        return this.http.get(userUrl, {headers: header2});
    }

    checkLogin() {
        if (localStorage.getItem('currentUserName') !== '' && localStorage.getItem('token') !== '') {
        return true;
        } else {
        return false;
        }
    }
    logout() {
        localStorage.setItem('token', '');
        localStorage.setItem('currentUserName', '');
        alert('you just logged out.');
    }
}
