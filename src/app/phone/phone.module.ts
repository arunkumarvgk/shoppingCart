import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneRoutingModule } from './phone-routing.module';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { MaterialModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    PhoneRoutingModule,
    MaterialModule,
  ],
  declarations: [PhoneListComponent]
})
export class PhoneModule { }
