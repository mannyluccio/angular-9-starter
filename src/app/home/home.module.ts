import {NgModule} from '@angular/core';
import {AuthenticationRoutingModule} from './home.routing';
import {HomeComponent} from './home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './404/404.component';


@NgModule({
    imports: [
        AuthenticationRoutingModule,
    ],
    declarations: [HomeComponent, DashboardComponent, NotFoundComponent]
})
export class HomeModule {
}
