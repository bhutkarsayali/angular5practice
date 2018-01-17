import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpService } from "./http.service";
import { Observable,Subscription } from "rxjs/Rx";
import { Output } from "@angular/core";

import { Customer } from '../admin/view-users/view-users.component';

@Component({
  selector: 'app-http',
  template: ' '
})
export class HttpComponent implements OnInit {
  ngOnInit() {

  }
}
