import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'
import { HTTP_INTERCEPTORS, HttpClientModule }    from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AddDataComponent } from './add-data/add-data.component';
import { AppComponent } from './app.component';
import {ContactFormComponent} from './form/contactForm.component';
import { CreateInfoComponent } from './create-info/create-info.component';
import {CreateInfoService} from './create-info.service';
import { DeleteInfoService } from './deleteInfo.service';
import { GetDataComponent } from './get-data/get-data.component';
import {SearchPipe} from './searchPipe';
import { UpdateInfoService } from './updateInfo.service';

@NgModule({
  declarations: [
    AddDataComponent,
    AppComponent,
    ContactFormComponent,
    CreateInfoComponent,
    FormComponent,
    GetDataComponent,
    NavbarComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [
    CreateInfoService,
    DeleteInfoService,
    UpdateInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
