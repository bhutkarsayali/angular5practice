import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../../http/http.service';

@Component({
  selector: 'sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  constructor(private router: Router, private myService:HttpService) { }

  ngOnInit() {
    //console.log('Id of the customer:: '+this.myService.customerID);
    this.myService.customerID = sessionStorage.getItem("customerID");
    this.myService.customerName = sessionStorage.getItem("customerName");
  }

  redirectToAddOrder() {
    this.router.navigate(['./add-new-order']);
  }

  redirectToAddUserHome() {
    this.router.navigate(['./user-home']);
  }
}
