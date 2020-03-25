import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {UserAddressPipe} from './models/user'

import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersComponent } from './users/users.component';


/**
 * The DepartmentListComponent and UserListComponent are in this import
 */
import {routingComponetns} from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { OverviewComponent } from './department-details/overview/overview.component';
import { ContactsComponent } from './department-details/contacts/contacts.component';
import { UserCardComponent } from './users/user-card/user-card.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserAddressPipe,
    routingComponetns,
    MenuComponent,
    OverviewComponent,
    ContactsComponent,
    UserCardComponent
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
