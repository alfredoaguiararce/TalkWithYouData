import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LandingPageComponent } from 'src/app/Components/landing-page/landing-page.component';
import { LoginFormComponent } from 'src/app/Components/login-form/login-form.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'Login', component: LoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }