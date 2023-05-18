import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './Components/auth-component/auth-component.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
// Otros imports...

const routes: Routes = [
   {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
   },
  {
    path: 'login',
    component: LoginFormComponent
  }
  // Otras rutas...
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
