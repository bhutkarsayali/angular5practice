import { Component, OnInit, Input } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';

import { HttpService } from '../http/http.service';
import { Customer } from '../admin/view-users/view-users.component';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private myService:HttpService) {
    console.log('LoginPageComponent.ts - Constructor called.');   
    this.myService.isLoginPage = true;  
    this.myService.showSubheader = false;
  }

  /*
  *validateLoginDetails: This function takes username and password as input
  * It validates whether the username and password are correct and 
  * whether the user is customer or Admin. Setting the customer id and name on service
  * and sessionStorage. This will be used further in application
  */
  validateLoginDetails(customerID:string, password:string) {
    console.log('LoginPageComponent - validateLoginDetails called.');

      let isValidCustomer : boolean = false; // Initialize to false
      let isUserAdminCustomer : boolean = false; // Initialize to false
            
      // Get the list of customers from service and traverse
      // Check if the customerId and password combination exists
      // If exists check if the user is customer or admin.
		for(var i=0; i< this.myService.allCustomerList.length;i++) {

			
      if(this.myService.allCustomerList[i].customerId === customerID 
        && this.myService.allCustomerList[i].password === password) {

        isValidCustomer = true; // customerId and password combination found
        
        //Set the customerId and name on common service. This can be used 
        //everywhere in the application
        this.myService.customerName = this.myService.allCustomerList[i].name;  
        this.myService.customerID = this.myService.allCustomerList[i].customerId;

        //Set the customerId and name on session storage. This is done so that
        //if the browser is refreshed the value should not be lost
        sessionStorage.setItem("customerID",this.myService.customerID);         
        sessionStorage.setItem("customerName",this.myService.allCustomerList[i].name);

        // let myJSON: string = JSON.stringify(this.myService.allCustomerList);
        // localStorage.setItem("allCustomerList", myJSON);
        // console.log("customerNamewwwwwwwwwwwwwwwwwwww::-> "+localStorage.getItem("allCustomerList"));

        //If the customerID is Admin, set the admin user flag to true.
        if(customerID == 'admin') {
					isUserAdminCustomer = true;
        }
        
			break;
      }

		}

    // Depending upon the user type (customer/admin) need to redirect to specific page
    // In case user not found redirect to login page
    if(isUserAdminCustomer) {
      //route to admin page
      sessionStorage.setItem("isInvalidDetails","false");
      this.redirectToUserhome('Admin');
    } else if(isValidCustomer) {
      //route to customer page
      sessionStorage.setItem("isInvalidDetails","false");
      this.redirectToUserhome('User');
    } else {
      //route to login with error        
      sessionStorage.setItem("isInvalidDetails","true");        
      this.redirectToUserhome('Error');
     }

   }

   /*
   * redirectToUserhome: This will do the actual routing as per the user login
  */
   redirectToUserhome(redirectPage: string) {
     if(redirectPage==='User') {
      this.router.navigate(['./user-home']);
     } else if (redirectPage=== 'Admin') {
      this.router.navigate(['./admin-home']);
     } else {
      this.router.navigate(['./login']);
     }    
  }

  ngOnInit() {
  }
}
