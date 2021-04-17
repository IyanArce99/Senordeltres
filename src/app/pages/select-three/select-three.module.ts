import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectThreePageRoutingModule } from './select-three-routing.module';

import { SelectThreePage } from './select-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectThreePageRoutingModule
  ],
  declarations: [SelectThreePage]
})
export class SelectThreePageModule {}
