import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _token;

  constructor(private router: Router,
              private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>('api/login', {email: 'eve.holt@reqres.in' , password: 'cityslicka'})
      .pipe(map(resp => {
        this.token = resp.token;
        return resp;
      }));
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
  }

  get token(): string {
    return this._token || localStorage.getItem('token');
  }

  set token(value: string) {
    localStorage.setItem('token', value);
    this._token = value;
  }

}
