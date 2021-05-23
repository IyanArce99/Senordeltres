import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DicesComponent } from 'src/app/components/dices/dices.component';
import { DataService } from 'src/app/services/data.service';

export interface User {
  username: string;
  isSeniorDelTres?: boolean;
}

@Component({
  selector: 'app-gentleman-dices',
  templateUrl: './gentleman-dices.page.html',
  styleUrls: ['./gentleman-dices.page.scss'],
})
export class GentlemanDicesPage {
  @ViewChild(DicesComponent) dicesComponent: DicesComponent;
  rollActivated: boolean = true;

  constructor() {}

  getUserPlaying(): User {
    return DataService.userPlaying;
  }

  getShowMessage(): boolean {
    return DataService.showMessage;
  }

  getMessage(): string {
    return DataService.messageToShow;
  }

  showBackgroundRed(): boolean {
    return DataService.showBackgroundRed;
  }
  roll(){
    if (this.rollActivated) {
      this.dicesComponent.rollDice();
      this.rollActivated = false;
      setTimeout(()=>{
        this.rollActivated = true;
      }, DataService.rollDice ? 1400 : 0);
    }
  }
  showInfoTurn() {
    if (DataService.selectSeniors) {
      return true;
    }
    
    return DataService.rollDice;
  }
}

