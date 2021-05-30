import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicStorageModule } from '@ionic/storage-angular';

// import { DicesComponent } from '../../components/dices/dices.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayLoadPageComponent } from './play-load-page.component';
import { PlayLoadPageRoutingModule } from './play-load-page-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayLoadPageRoutingModule,
    SharedModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [PlayLoadPageComponent]
})
export class PlayLoadPageModule {}