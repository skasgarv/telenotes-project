import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetDataComponent } from './get-data/get-data.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
