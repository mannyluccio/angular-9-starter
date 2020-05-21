import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {AuthService} from '../../core/services/auth.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  public constructor() {
  }

  public intercept(req: HttpRequest<any>,
                   next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');

    if (token) {
      req = req.clone({
        setHeaders:
          {
            Authorization: `Bearer ${token}`
          }});
    }
    return next.handle(req);

  }
}
