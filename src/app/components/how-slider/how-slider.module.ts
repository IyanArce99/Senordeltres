import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowSliderPageRoutingModule } from './how-slider-routing.module';

import { HowSliderPage } from './how-slider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowSliderPageRoutingModule
  ],
  declarations: [HowSliderPage]
})
export class HowSliderPageModule {}
