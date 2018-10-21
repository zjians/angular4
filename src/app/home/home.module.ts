import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Homepage1Component } from './homepage1/homepage1.component';
import { Homepage2Component } from './homepage2/homepage2.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    Homepage1Component,
    Homepage2Component
  ]
})
export class HomeModule { }
