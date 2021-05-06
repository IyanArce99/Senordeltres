import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicStorageModule } from '@ionic/storage-angular';

import { DicesComponent } from '../../components/dices/dices.component';
import { YouAreComponent } from './you-are.component';
import { YouAreRoutingModule } from './you-are-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YouAreRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [YouAreComponent, DicesComponent]
})
export class YouArePageModule {}
