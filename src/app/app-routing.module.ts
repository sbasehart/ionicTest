import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule', canActivate: [AuthGuard] },
  {
    path: 'view-order',
    loadChildren: () => import('./views/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'view-item',
    loadChildren: () => import('./views/item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'view-location',
    loadChildren: () => import('./views/location/location.module').then( m => m.LocationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
