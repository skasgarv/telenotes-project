import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetDataComponent } from './get-data/get-data.component';
import { AddDataComponent } from './add-data/add-data.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetDataComponent,
    AddDataComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
