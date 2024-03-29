import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'add-users',
    loadChildren: () => import('./pages/add-users/add-users.module').then( m => m.AddUsersPageModule)
  },
  {
    path: 'select-three',
    loadChildren: () => import('./pages/select-three/select-three.module').then( m => m.SelectThreePageModule)
  },
  {
    path: 'gentleman-dices',
    loadChildren: () => import('./pages/gentleman-dices/gentleman-dices.module').then( m => m.GentlemanDicesPageModule)
  },
  {
    path: 'you-are',
    loadChildren: () => import('./components/you-are/you-are-module').then(m => m.YouArePageModule)
  },
  {
    path: 'play-loader',
    loadChildren: () => import('./components/play-load-page/play-load-page-module').then(m => m.PlayLoadPageModule)
  },
  {
    path: 'how-slider',
    loadChildren: () => import('./components/how-slider/how-slider.module').then( m => m.HowSliderPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
