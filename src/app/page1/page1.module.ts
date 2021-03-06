import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1RoutingModule } from './page1-routing.module';
import { Page1Component } from './page1.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    Page1RoutingModule,
    SharedModule
  ],
  declarations: [
    Page1Component,
  ]
})
export class Page1Module { }
