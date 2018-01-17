import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,Subscription } from "rxjs/Rx";

import { HttpService } from '../../http/http.service';
import { HttpComponent } from '../../http/http.component';
import { Product } from "../../user/new-order/new-order.component";

@Component({
  selector: 'admin-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.scss']
})

export class ViewOrdersComponent implements OnInit {

  constructor(private router: Router, private myService:HttpService) {
    this.myService.isLoginPage = false;
    this.myService.showSubheader = false;
    this.myService.isUserCustomer = false;
  }

  redirectToAdminHome() {
    this.router.navigate(['../admin-home']);
  }

  ngOnInit() {
    // localStorage.getItem("allProductListOnLocalStorage")
    // console.log('dsds' +localStorage.getItem("allProductListOnLocalStorage"));
  }
  
}

export interface Order {
  orderId : string,
  customerId : string,
  product : string,            
  quantity : number
}