import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { OrderPage } from './order.page';
import { AuthGuard } from 'src/app/services/auth.guard';
import { AuthenticationService } from 'src/app/services/authentication.service';

const routes: Routes = [
  {
    path: '',
    component: OrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthenticationService]
})
export class OrderPageRoutingModule {}
