import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../../http/http.service';

@Component({
  selector: 'admin-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {

  constructor(private router: Router, private myService:HttpService) {
    this.myService.isLoginPage = false;
    this.myService.showSubheader = false;
    this.myService.isUserCustomer = false;
   }

  ngOnInit() {
  }

  redirectToAdminHome(){
    this.router.navigate(['../admin-home']);
  }
}
