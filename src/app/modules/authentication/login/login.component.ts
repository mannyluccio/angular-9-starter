import {Component} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';

@Component({
    selector: 'travel-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent{

    constructor(private authService: AuthService) {}

    login(){
      this.authService.login('', '').subscribe(
        (resp) => {
          console.log('buono', resp);
        },
        (error) => {
          console.log('error', error);
        }
      );
    }
}

