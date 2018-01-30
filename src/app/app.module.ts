import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import {HttpModule} from '@angular/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetDataComponent } from './get-data/get-data.component';
import { AddDataComponent } from './add-data/add-data.component';
import { FormComponent } from './form/form.component';
import { CreateInfoComponent } from './create-info/create-info.component';
import {ContactFormComponent} from './form/contactForm.component';
import {SearchPipe} from './searchPipe';
import {CreateInfoService} from './create-info.service';
import { DeleteInfoService} from './deleteInfo.service';
import { UpdateInfoService } from './updateInfo.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetDataComponent,
    AddDataComponent,
    FormComponent,
    CreateInfoComponent,
    ContactFormComponent,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CreateInfoService,DeleteInfoService, UpdateInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
