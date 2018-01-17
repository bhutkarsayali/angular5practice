import { Component, OnInit } from '@angular/core';
import { Order } from '../admin/view-orders/view-orders.component';
import { Router } from '@angular/router';
import { HttpService } from '../http/http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'user-home',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  constructor(private router: Router, private myService:HttpService) {   

    this.myService.isLoginPage = false; // true if the user logged in is Admin
    this.myService.showSubheader = true; // Flg to either show or hide the sub-header
    this.myService.isUserCustomer = true; // true if the user logged in is customer  
    this.myService.showAddNewOrder = false; // true if Add new Order button needs to be shown.
    this.myService.isUserAdmin = false; // true if the user logged in is Admin
}

  ngOnInit() {
    
  }
}
