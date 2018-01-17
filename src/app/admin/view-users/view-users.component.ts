import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,Subscription } from "rxjs/Rx";

import { HttpService } from '../../http/http.service';
import { HttpComponent } from '../../http/http.component';

@Component({
  selector: 'admin-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {

  constructor(private router: Router, private myService:HttpService) {
    this.myService.isLoginPage = false;
    this.myService.showSubheader = false;
    this.myService.isUserCustomer = false;
  }

  redirectToAdminHome(){
    this.router.navigate(['../admin-home']);
  }

  redirectToUserOrders(clickedCustId: string) {    
    this.myService.clickedCustomerId = clickedCustId;
    this.router.navigate(['../user-orders']);
  }

  ngOnInit() {
  }
  
}

export interface Customer {
  customerId:string;
  name:string;
  password:string;
}

