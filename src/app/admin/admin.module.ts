import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AdminComponent } from './admin.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { HttpComponent } from '../http/http.component';
import { HttpService } from '../http/http.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    AdminComponent
  ],
  declarations: [
    AdminComponent,
    ViewOrdersComponent,
    ViewUsersComponent,
    UserOrdersComponent
  ],
  providers:[HttpClient,HttpService]
})
export class AdminModule { }
