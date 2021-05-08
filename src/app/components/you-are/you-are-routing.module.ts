import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YouAreComponent } from './you-are.component';

const routes: Routes = [
  {
    path: '',
    component: YouAreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YouAreRoutingModule {}
