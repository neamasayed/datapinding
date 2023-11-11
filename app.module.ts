import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuuComponent } from './menuu/menuu.component';
import { SideparComponent } from './sidepar/sidepar.component';
import { CourcesComponent } from './cources/cources.component';
import { RateComponent } from './rate/rate.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuuComponent,
    SideparComponent,
    CourcesComponent,
    RateComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
