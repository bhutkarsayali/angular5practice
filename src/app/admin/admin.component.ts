import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../http/http.service';

@Component({
  selector: 'admin-home',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  constructor(private router: Router, private myService:HttpService) { 
    this.myService.isLoginPage = false;
    this.myService.showSubheader = true;
    this.myService.isUserCustomer = true;
    this.myService.showAddNewOrder = false;
    //this.myService.isUserAdmin = true;
  }

  ngOnInit() {
  }

  redirectToViewOrders() {
    this.router.navigate(['../view-orders']);
  }

  redirectToViewUsers() {
    this.router.navigate(['../view-users']);
  }

}
