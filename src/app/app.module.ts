import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { RaceComponent } from './race/race.component';
import { PonyComponent } from './pony/pony.component';
import { FromNowPipe } from './from-now.pipe';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent, 
    MenuComponent, 
    RacesComponent, 
    RaceComponent, 
    PonyComponent, 
    FromNowPipe, 
    HomeComponent, 
    RegisterComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(ROUTES), 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
