import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private myService:HttpService) { }

  redirect() {
    this.router.navigate(['./login']);
  }
  
  ngOnInit() {
   
  }

}
