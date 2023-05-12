import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './Components/auth-component/auth-component.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material-module/material.module';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AuthModule { }
