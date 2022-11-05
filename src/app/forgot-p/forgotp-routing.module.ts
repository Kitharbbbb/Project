import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpPage } from './forgotp.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotpPageRoutingModule {}
