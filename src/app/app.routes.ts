import { Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { NewOrderComponent } from './user/new-order/new-order.component';
import { SelectedOrderComponent } from './user/selected-order/selected-order.component';
import { AdminComponent } from './admin/admin.component';
import { UserOrdersComponent } from './admin/user-orders/user-orders.component';
import { ViewOrdersComponent } from './admin/view-orders/view-orders.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';

export const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'user-home',
    component: UserComponent,
    children: [
      // { path: 'add-new-order', component: NewOrderComponent },
      { path: 'selected-order/:id1/:id2/:id3', component: SelectedOrderComponent }
    ]
  },
  {
    path: 'add-new-order',
    component: NewOrderComponent,
  },
  {
    path: 'admin-home',
    component: AdminComponent,
  },
  {
    path: 'view-orders',
    component: ViewOrdersComponent,
  },
  {
    path: 'view-users',
    component: ViewUsersComponent,
  },
  {
    path: 'user-orders',
    component: UserOrdersComponent,
  }
];