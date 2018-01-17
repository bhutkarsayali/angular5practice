import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
//import 'rxjs/add/observable/forkJoin';
import { Observable } from "rxjs/Rx";

import { Customer } from "../admin/view-users/view-users.component";
import { Order } from "../admin/view-orders/view-orders.component";
import { Product } from "../user/new-order/new-order.component";

@Injectable()
export class HttpService {

  isUserCustomer: boolean; // true if the user logged in is customer  
  isUserAdmin: boolean; // true if the user logged in is Admin
  isLoginPage: boolean; // Set this flag to true only on Login page. Else everywhere this flag is false.

  showAddNewOrder: boolean; // true if Add new Order button needs to be shown.
  showSubheader: boolean; // Flg to either show or hide the sub-header

  customerName: string; // This is the name of the customer. This is used to display everywhere.
  custPassword:string; // This is the password of the customer. We may need to remove this.
  customerID:string; // This the id of the customer who has logged in the application.
  clickedCustomerId : string // This is used to store the customerId that is clicked.

  allCustomerList : Array<Customer> = [];  // List of ALL the customers from JSON file
  allOrderList  : Array<Order> = []; // List of ALL the orders from JSON file
  allProductList : Array<Product> = []; // List of ALL the products from JSON file
  
  
  constructor(private httpClient:HttpClient) { 
    console.log('HTTP Service.ts - Constructor called.');
    this.setAllCustomers();
    this.setAllOrders();
    this.setAllProducts();
  }

  getCustomers():Observable<any>{
    console.log('HTTP Service.ts - getCustomers called.');
    return this.httpClient.get<Array<Customer>>('http://localhost:9000/user.json');
  }

  setAllCustomers() {
    console.log('HTTP Service.ts - setCustomers called.');
    this.getCustomers().subscribe((res:Array<Customer>)=>{
      this.allCustomerList = res.concat();

      let allCustomerListOnLocalStorage: string = JSON.stringify(this.allCustomerList); //storing allCustomerList on localstorage
      localStorage.setItem("allCustomerListOnLocalStorage", allCustomerListOnLocalStorage);
      console.log("allCustomerListOnLocalStorage::-> "+localStorage.getItem("allCustomerListOnLocalStorage"));
    });
  }

  getAllOrders():Observable<any>{
    console.log('HTTP Service.ts - getAllOrders called.');
    return this.httpClient.get<Array<Order>>('http://localhost:9000/order.json');
  }

  setAllOrders() {
    console.log('HTTP Service.ts - setAllOrders called.');
    this.getAllOrders().subscribe((res:Array<Order>)=>{
      this.allOrderList = res.concat();

      let allOrderListOnLocalStorage: string = JSON.stringify(this.allOrderList); //storing allOrderList on localstorage
      localStorage.setItem("allOrderListOnLocalStorage", allOrderListOnLocalStorage);
      console.log("allOrderListOnLocalStorage::-> "+localStorage.getItem("allOrderListOnLocalStorage"));
    });

  }

  getAllProducts():Observable<any>{
    console.log('HTTP Service.ts - getAllProducts called.');
    return this.httpClient.get<Array<{Product}>>('http://localhost:9000/product.json');
  }

  setAllProducts() {
    console.log('HTTP Service.ts - setAllProducts called.');
    this.getAllProducts().subscribe((res:Array<Product>)=>{
      this.allProductList = res.concat();

      let allProductListOnLocalStorage: string = JSON.stringify(this.allProductList); //storing allProductList on localstorage
      localStorage.setItem("allProductListOnLocalStorage", allProductListOnLocalStorage);
      console.log("allProductListOnLocalStorage::-> "+localStorage.getItem("allProductListOnLocalStorage"));
    });    
  }

  /*
  * The below function is used to return orderlist as per customer i.e. a segregated list 
  * as per customer. This will be used on user home and admin customer order pages.
  */
  getOrderListForCustomer(customerId:string): Array<Order> {
    let custOrderList : Order[] = []; // An empty array created which will be used in below code.
    
    this.allOrderList.forEach(order => {
		if(order.customerId === customerId) { //If the order belongs the customer id sent in input
			custOrderList.push(order);          // pushing that order on the newly created array.
		}
    });
    
    return custOrderList;
  }

  /*
  * The below function is used to return count of orders per customer.
  * This will be used on admin customer order page.
  */
  getOrderCountForCustomer(customerId:string): number {
    let custOrderList : Order[] = []; 

    this.allOrderList.forEach(order => {
		if(order.customerId === customerId) { 
			custOrderList.push(order);          
		}
    });
    
    return custOrderList.length;  // return the count of the orders
  }


  /*
  * The below function is used to return product name based on productId. This will be used in admin section
  * to display product name.
  */
  getProductName(productId:string) : string {
    for (let i=0; i<this.allProductList.length ; i++) {
		if(this.allProductList[i].productId == productId) { // If the productId matches then return the product name
			return this.allProductList[i].name;                // if no match found return "Unknown Product"      
		}   
   } 
   return "Unknown Product";
  }

  /*
  * The below function is used to return customer name based on customerId. This will be used in admin section
  * to display customer name.
  */
  getCustomerName(customerId:string) : string {
    for (let i=0; i<this.allCustomerList.length ; i++) {
		if(this.allCustomerList[i].customerId == customerId) { // If the customerId matches then return the customer name
			return this.allCustomerList[i].name;                 
		}   
   } 
  }

  displayError(): boolean {
    console.log("ERRor::-> "+sessionStorage.getItem("isInvalidDetails"));
    if(sessionStorage.getItem("isInvalidDetails") == "true") {
      return true;
    } else {
      return false;
    }
  }

}
