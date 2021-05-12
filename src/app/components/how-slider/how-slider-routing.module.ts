import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowSliderPage } from './how-slider.page';

const routes: Routes = [
  {
    path: '',
    component: HowSliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowSliderPageRoutingModule {}
