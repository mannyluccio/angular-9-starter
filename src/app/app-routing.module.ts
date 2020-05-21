import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './modules/home/404/404.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m =>
      m.AuthenticationModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m =>
      m.HomeModule)
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
