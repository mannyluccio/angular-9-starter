import {NgModule} from '@angular/core';
import {AuthenticationRoutingModule} from './authentication.routing';
import {AuthenticationComponent} from './authentication.component';
import {LoginComponent} from './login/login.component';


@NgModule({
    imports: [
        AuthenticationRoutingModule,
    ],
    declarations: [AuthenticationComponent, LoginComponent]
})
export class AuthenticationModule {
}
