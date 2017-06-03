import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/forkJoin';

import { User } from './models/user';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }
  sendUser (user: User) {
    const url = 'http://localhost:8080/user/register';
    const header = new Headers({'Content-Type': 'application/json'});

    return this.http.post(url, JSON.stringify(user), {headers: header});
  }
}
