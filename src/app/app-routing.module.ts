import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, ɵEmptyOutletComponent } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { OverviewComponent } from './department-details/overview/overview.component';
import { ContactsComponent } from './department-details/contacts/contacts.component';
import { UserCardComponent } from './users/user-card/user-card.component';


const routes: Routes = [
  {path : '' , redirectTo :'home',pathMatch :"full"},
  {path : 'departments' , component : DepartmentListComponent},
  {
    path : 'departments/:id' , component : DepartmentDetailsComponent,
    children : [
      {path: '', redirectTo : 'overview',pathMatch :"full"},
      {

        path : 'overview', component : OverviewComponent,

    },
      {path : 'contacts', component : ContactsComponent}
    ]

  },
  {path : 'employees', component : EmployeeListComponent},
  {path : 'home', component: TestComponent},
  {path : '**', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponetns = [DepartmentListComponent,EmployeeListComponent,PageNotFoundComponent,TestComponent,DepartmentDetailsComponent]
