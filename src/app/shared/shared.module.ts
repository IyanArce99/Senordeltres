import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DicesComponent } from '../components/dices/dices.component';



@NgModule({
  declarations: [
    DicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DicesComponent
  ]
})
export class SharedModule { }
