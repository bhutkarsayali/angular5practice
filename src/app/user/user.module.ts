import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { SelectedOrderComponent } from './selected-order/selected-order.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { routes } from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    UserComponent
  ],
  declarations: [
    UserComponent,
    SelectedOrderComponent,
    NewOrderComponent
  ]
})
export class UserModule { }
