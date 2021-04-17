import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectThreePage } from './select-three.page';

const routes: Routes = [
  {
    path: '',
    component: SelectThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectThreePageRoutingModule {}
