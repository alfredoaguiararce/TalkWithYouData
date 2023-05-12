import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material-module/material.module';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './Modules/auth/auth.module';
import { MainCardComponent } from './Components/main-card/main-card.component';
import { HomeHeaderComponent } from './Components/home-header/home-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainCardComponent,
    HomeHeaderComponent
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
