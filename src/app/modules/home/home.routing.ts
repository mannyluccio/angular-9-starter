import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeGuard} from './home.guard';


const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [HomeGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ],
  },

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AuthenticationRoutingModule {


}

