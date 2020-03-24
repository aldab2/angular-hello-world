import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {UserAddressPipe} from './models/user'

import {HttpClientModule} from '@angular/common/http'
//import {Pipe , PipeTransform} from '@angular/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UsersComponent } from './users/users.component';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UsersComponent,
    UserAddressPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  


 }
