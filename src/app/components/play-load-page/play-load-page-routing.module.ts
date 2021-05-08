import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayLoadPageComponent } from './play-load-page.component';


const routes: Routes = [
  {
    path: '',
    component: PlayLoadPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayLoadPageRoutingModule {}
