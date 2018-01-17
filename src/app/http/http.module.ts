import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { HttpComponent } from './http.component';
import { HttpService } from './http.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    HttpComponent
  ],
  declarations: [
    HttpComponent
  ],
  providers:[HttpClient,HttpService]
})
export class HttpModule { }
