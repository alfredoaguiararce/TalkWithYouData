import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material-module/material.module';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LoginFormComponent } from './Modules/auth/Components/login-form/login-form.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './Modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
