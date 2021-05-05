import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GentlemanDicesPageRoutingModule } from './gentleman-dices-routing.module';

import { GentlemanDicesPage } from './gentleman-dices.page';
import { IonicStorageModule } from '@ionic/storage-angular';

import { DicesComponent } from '../../components/dices/dices.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GentlemanDicesPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [GentlemanDicesPage, DicesComponent]
})
export class GentlemanDicesPageModule {}
