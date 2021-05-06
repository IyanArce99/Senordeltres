import { Injectable } from '@angular/core';
import { User } from '../pages/gentleman-dices/gentleman-dices.page';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static userPlaying: User;
  static users: User[];
  static positionActual: number;
  static quantitySeniorsDelTres: number;
  static halfOfUsers: number;
  constructor() { }

  static init(users: User[]): void {
    this.users = users;
    this.userPlaying = users[this.positionActual];
    this.halfOfUsers = Math.floor(this.users.length / 2);
    this.quantitySeniorsDelTres = 0;
    this.positionActual = 0;
  }

  static getNext(isSeniorDelTres: boolean): void {
    // Seteo si es señor del tres y avanzo en 1 el contador de la cantidad de señores del tres.
    if (!this.userPlaying.isSeniorDelTres && isSeniorDelTres){
      this.userPlaying.isSeniorDelTres = isSeniorDelTres;
      this.quantitySeniorsDelTres++;
    }
    // Para que vuelva al primer elemento cuando llega al final del array.
    if ( (this.positionActual + 1) > (this.users.length - 1) ) {
      this.positionActual = 0;
    }else{
      this.positionActual++;
    }

    this.userPlaying = this.users[this.positionActual];
  }
}
