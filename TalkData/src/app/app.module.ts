import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './Modules/app-routing-module/app-routing-module.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material-module/material.module';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
