import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutemePage } from './abouteme.page';

const routes: Routes = [
  {
    path: '',
    component: AboutemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutemePageRoutingModule {}
