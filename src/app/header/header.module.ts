import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    SubHeaderComponent
  ],
  declarations: [
    HeaderComponent,
    SubHeaderComponent
  ]
})
export class HeaderModule { }
