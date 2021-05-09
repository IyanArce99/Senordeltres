import { Component } from '@angular/core';
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
}

