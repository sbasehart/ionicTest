import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'location',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../location/location.module').then(m => m.LocationPageModule),
            canActivate: [AuthGuard]
          },
        ]
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../orders/orders.module').then(m => m.OrdersPageModule),
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'items',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../items/items.module').then(m => m.ItemsPageModule),
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule),
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/orders',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/orders',
    pathMatch: 'full'
  },
  {
    path: 'location/:id',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../views/location/location.module').then(m => m.LocationPageModule),
          canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'new-location',
    children: [
    {
      path: '',
      loadChildren: () =>
    import('../views/location/location.module').then(m => m.LocationPageModule),
    canActivate: [AuthGuard]
    }
    ]
    },
  {
    path: 'item/:id',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../views/item/item.module').then(m => m.ItemPageModule),
          canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'new-item',
    children: [
    {
      path: '',
      loadChildren: () =>
    import('../views/item/item.module').then(m => m.ItemPageModule),
    canActivate: [AuthGuard]
    }
    ]
    },
  {
    path: 'order/:id',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../views/order/order.module').then(m => m.OrderPageModule),
          canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'new-order',
    children: [
    {
      path: '',
      loadChildren: () =>
    import('../views/order/order.module').then(m => m.OrderPageModule),
    canActivate: [AuthGuard]
    }
    ]
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
