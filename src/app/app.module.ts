import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetDataComponent } from './get-data/get-data.component';
import { AddDataComponent } from './add-data/add-data.component';
import { FormComponent } from './form/form.component';
import { CreateInfoComponent } from './create-info/create-info.component';
import {ContactFormComponent} from './form/contactForm.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetDataComponent,
    AddDataComponent,
    FormComponent,
    CreateInfoComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
