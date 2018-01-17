import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { HttpService } from '../../http/http.service';
import { Order } from '../../admin/view-orders/view-orders.component';

@Component({
  selector: 'user-selected-order',
  templateUrl: './selected-order.component.html',
  styleUrls: ['./selected-order.component.scss']
})

export class SelectedOrderComponent implements OnInit {

  selectedOrderId:string;  // This property is used to display the OrderId which is selected
  productId: string; // This property is used to display the product id 
  quantity: number; // This property is used to display the quantity

  // This constructor is used to set the flags: isLoginPage and showSubheader
  // We have used 'activatedRoute' in this. This is used to read the property from
  // the parent component i.e. Selected Order, Product Id and Quantity
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private myService:HttpService) { 
      
      this.myService.isLoginPage = false;
      this.myService.showSubheader = true;   
  }

  /*
  * On init: Using the activatedRoute get the Selected Order, Product Id and Quantity
  * from the parent component and then set them on their respective properties. This will be
  * used in the view (selected-order.component.html) to display.
  */
  ngOnInit() {

    this.activatedRoute.params.subscribe(res =>{      
      this.selectedOrderId = res.id1;
      this.productId = res.id2; 
      this.quantity = res.id3;        
    });
  }
  
  closeOrderDetails() {
    this.router.navigate(['./user-home']);
  }

}
