import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicStorageModule } from '@ionic/storage-angular';

// import { DicesComponent } from '../../components/dices/dices.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { YouAreComponent } from './you-are.component';
import { YouAreRoutingModule } from './you-are-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YouAreRoutingModule,
    SharedModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [YouAreComponent]
})
export class YouArePageModule {}
