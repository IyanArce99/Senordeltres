import { Injectable } from '@angular/core';
import { User } from '../pages/gentleman-dices/gentleman-dices.page';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Jugador que esta jugando en este momento
  static userPlaying: User;
  // Ultimo usuario (es el ultimo jugador que jugo)
  static lastUser: User = null;
  // Lista de jugadores
  static users: User[];
  // Indice para identificar el jugador del momento e ir avanzando
  static positionActual: number;
  // Cantidad de seniores del tres
  static quantitySeniorsDelTres: number;
   // Mitad de jugadores
  static halfOfUsers: number;
   // Resultados de dados, para persistir la informacion entre pantallas
  static diceResults: number[] = [];
  // Indica si ya pasamos del proceso de seleccion de los señores del tres
  static selectSeniors: boolean;
  // Booleano que decide si mostrar o no mensaje de prenda
  static showMessage: boolean;
  // Mensaje de prenda
  static messageToShow: string;
  // Define si mostrar el fondo de pantalla rojo
  static showBackgroundRed: boolean;

  // Next User Status
  static nextUser: boolean;
  // Roll dice Status
  static rollDice: boolean = true;
  // Init roll dice
  static isRollDiceInitialized: boolean;

  
  constructor() { }

  static init(users: User[]): void {
    this.users = users;
    this.userPlaying = users[this.positionActual];
    this.halfOfUsers = Math.floor(this.users.length / 2);
    this.quantitySeniorsDelTres = 0;
    this.positionActual = 0;
    this.selectSeniors = true;
  }
  static changeStateRollAndNext(): void {
    this.nextUser = !this.nextUser;
    this.rollDice = !this.rollDice;
  }

  static setLastUser(){
    this.lastUser = this.userPlaying;
  }
  static addOneSeniorsDelTres(): void {
    DataService.quantitySeniorsDelTres++;
    this.userPlaying.isSeniorDelTres = true;
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
    this.lastUser = this.userPlaying;
    this.userPlaying = this.users[this.positionActual];
  }

  static getNextPlaying(): void {
    if ( (this.positionActual + 1) > (this.users.length - 1) ) {
      this.positionActual = 0;
    }else{
      this.positionActual++;
    }
    this.userPlaying = this.users[this.positionActual];
  }


  static obtainPrenda(resultDice: number[]): void{
    setTimeout(()=>{
      let sum: number = resultDice[0] + resultDice[1];
      // this.messageToShow = this.userPlaying.username + '. ';
      if(resultDice.every(value=>value === 3)){
        this.messageToShow = 'DOBLE CABALLERO DEL TRES!';
        this.showBackgroundRed = true;
      }
      else if(resultDice.includes(3)){
        this.messageToShow = 'BEBEN LOS SEÑORES DEL TRES!';
        this.showBackgroundRed = true;
      }
      else if (resultDice[0] === resultDice[1]){
        this.messageToShow = `${this.userPlaying.username}, tu eliges quien bebe ${resultDice[0]} chupitos`;
      }
      else if (sum === 7){
        this.messageToShow = `${this.userPlaying.username}, bebe un chupito el jugador de tu izquierda`;
      }
      else if (sum === 8){
        this.messageToShow = '¡Teneis que beber TODOS un chupito!, el último en posar el vaso y decir la palabra mierda, tendrá que beber otro chupito';
      }
      else if (sum === 9){
        this.messageToShow = `${this.userPlaying.username}, bebe un chupito el jugador de tu derecha`;
      }else {
        this.messageToShow = `${this.userPlaying.username}, te tienes que beber un chupito`;
      }
  
      this.showMessage = true;
    },1400);
  }

}


