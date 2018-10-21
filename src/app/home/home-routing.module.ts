import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { Homepage1Component } from './homepage1/homepage1.component';
import { Homepage2Component } from './homepage2/homepage2.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'homepage1',
        pathMatch: 'full'
      },
      {
        path: 'homepage1',
        component: Homepage1Component
      },
      {
       path: 'homepage2',
       component: Homepage2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
