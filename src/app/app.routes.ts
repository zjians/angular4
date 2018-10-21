import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: '**', // 通配符匹配必须写在最后一个
    component: HomeComponent
  }
];
