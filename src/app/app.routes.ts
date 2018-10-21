import { RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { Page1Component } from './page1/page1.component';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'page1',
    loadChildren: './page1/page1.module#Page1Module'
  },
  {
    path: '**', // 通配符匹配必须写在最后一个
    loadChildren: './home/home.module#HomeModule'
  }
];
