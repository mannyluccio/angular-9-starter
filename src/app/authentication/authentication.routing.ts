import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from './authentication.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
    path: '', component: AuthenticationComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {
        path: 'login',
        component: LoginComponent
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

