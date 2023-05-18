import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AuthComponent } from './Modules/auth/Components/auth-component/auth-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home',   
    component: LandingPageComponent 
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
