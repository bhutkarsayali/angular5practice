import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpService } from '../../http/http.service';
import { Order } from "../../admin/view-orders/view-orders.component";

@Component({
  selector: 'user-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})

export class NewOrderComponent implements OnInit {
 
 selectedItem: Product; // This is used to bind the Product selected from dropdown
 prodQuantity: number; // This is used to bind the Product quantity

 // Create a new order. This will be used to push on the orderList
 newOrder : Order = {orderId: "", customerId: "", product:"", quantity:0}; 

  constructor(private myService:HttpService, private router: Router,) {
 
    this.myService.isLoginPage = false;
    this.myService.showSubheader = true;
    this.myService.isUserCustomer = false;
    this.myService.showAddNewOrder = true;
    this.myService.isUserAdmin = false;    

   }

  /*
   * This is called from the view (new-order.component.html) to bind the value that has been
   * selected by the user.
   * */
  setSelectedProduct(selectedProduct: Product) { 
    this.selectedItem = selectedProduct;
  }

  /*
   * This functions creates a new order with the values selected by the user.
   * It also generates a random orderId and is set to the new order
   * This order is then added to the existing list of orders
   * After this is done -> route to user home page.
   * */

  addOrderAndRedirect() {    
    //create the order
    let randOrderID : string;
    this.newOrder.quantity = this.prodQuantity;
    this.newOrder.customerId = sessionStorage.getItem("customerID");
    //randOrderID = require("uuid").v4();
    //randOrderID = "#1234-5678-9101";
    randOrderID = Math.floor(Math.random()*4556856457).toString();
    this.newOrder.orderId = randOrderID.substr(0,10);
    this.newOrder.product = this.selectedItem.productId;
    
    //add the order to the order list
    this.myService.allOrderList.push(this.newOrder);

    //Redirect to the user home page
    this.router.navigate(['./user-home']);
  }

  ngOnInit() {
  }

}
export interface Product{
  productId : string,
  name : string
}