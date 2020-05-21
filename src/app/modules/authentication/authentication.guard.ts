import {AuthService} from '../../core/services/auth.service';
import {CanActivate, Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate() {
    if (!this.authService.token){
      return true;
    } else {
      return this.router.createUrlTree(['']);
    }
  }
}
