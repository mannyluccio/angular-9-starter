import {NgModule} from '@angular/core';
import {AuthenticationRoutingModule} from './authentication.routing';
import {AuthenticationComponent} from './authentication.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationGuard} from './authentication.guard';


@NgModule({
    imports: [
        AuthenticationRoutingModule,
    ],
    providers: [AuthenticationGuard],
    declarations: [AuthenticationComponent, LoginComponent]
})
export class AuthenticationModule {
}
