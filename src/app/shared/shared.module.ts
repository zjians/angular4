import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowInfoComponent } from '../show-info/show-info.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ShowInfoComponent
  ],
  exports: [
    ShowInfoComponent
  ]
})
export class SharedModule { }
