import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GentlemanDicesPage } from './gentleman-dices.page';

const routes: Routes = [
  {
    path: '',
    component: GentlemanDicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GentlemanDicesPageRoutingModule {}
