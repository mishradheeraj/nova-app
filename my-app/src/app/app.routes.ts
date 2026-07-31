import { Routes } from '@angular/router';
import { Blankpagecomponent } from './layout/blankpagecomponent/blankpagecomponent';
import { Fullpagecomponent } from './layout/fullpagecomponent/fullpagecomponent';
   

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: Blankpagecomponent,
    loadChildren: () => import('./modules/auth/auth-routing-module').then(m => m.AuthRoutingModule)
  },
  {
    path: 'dashboard',
    component: Fullpagecomponent,
    loadChildren: () => import('./modules/dashboard/dashboard-module').then(m => m.DashboardModule)
  },
  {
    path: 'product',
    component: Fullpagecomponent,
    loadChildren: () => import('./modules/product/product-module').then(m => m.ProductModule)
  }
];

