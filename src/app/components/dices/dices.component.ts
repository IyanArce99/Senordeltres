import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss'],
})
export class DicesComponent implements OnInit {
  actualPlayerIsSeniorDelTres: boolean;
  dicesResult = [];
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    // Creamos un observer para cuando llegue por param isAlreadyToPlay === 'false' lanzar la alerta o el component que sea necesario posteriormente.
    this.activatedRoute.params.subscribe((e)=>{
      if (DataService.isRollDiceInitialized){
        if(DataService.selectSeniors && DataService.diceResults.length > 0){
          let dices = <any>document.querySelectorAll(".die-list");
          let dice = [...dices];
          
          dice.forEach((die, i) => {
              let results: number = (i % 2 === 0) ? DataService.diceResults[0]: DataService.diceResults[1];
              this.toggleClasses(die);
              die.dataset.roll =results;          
        });
          DataService.diceResults=[];
        }
        DataService.changeStateRollAndNext();
      }

      if (!DataService.isRollDiceInitialized){
        DataService.isRollDiceInitialized = true;
      }
    })
  }

  rollDice() {
    if (DataService.rollDice) {
      const dices = <any>document.querySelectorAll(".die-list");
      const diceLarge = [...dices];
      const dice = diceLarge.slice(diceLarge.length-2, diceLarge.length);
      dice.forEach((die, i) => {
        this.toggleClasses(die);
        const number = this.getRandomNumber(1, 6);
        this.dicesResult[i] = number;
        DataService.diceResults[i] = number;
        die.dataset.roll = number;
      });
      // Este if es para que se ejecute solo cuando esta en la pantalla de seleccion de señores del 3
      if (DataService.selectSeniors){
        this.actualPlayerIsSeniorDelTres = this.dicesResult.includes(3);
        if (this.actualPlayerIsSeniorDelTres){
          setTimeout(()=>{
            // Esto es para actualizar el numero de seniores del tres y al jugador de este momento agregarle el true de seniores del tres. Ya que no se corre la funcion next en este caso.
            DataService.addOneSeniorsDelTres();
            // Para el componente de you-are
            DataService.setLastUser();
            if (DataService.halfOfUsers === DataService.quantitySeniorsDelTres) {
              this.router.navigate(['./you-are', {isAlreadyToPlay: true}]); 
            }else {
              this.getNext(this.actualPlayerIsSeniorDelTres);
              this.router.navigate(['./you-are', {isAlreadyToPlay: false}]); 
            }
          }, 1400);
        
        }
      }else {
        DataService.obtainPrenda(this.dicesResult);
      }
    }else {
      this.getNext(this.actualPlayerIsSeniorDelTres);
    }
    setTimeout(()=>{
      DataService.changeStateRollAndNext();
    }, DataService.rollDice ? 1400 : 0)
  }  

  getNext(isSenioDelTres: boolean): void {
    DataService.showMessage = false;
    DataService.showBackgroundRed = false;
    if (DataService.selectSeniors){
      DataService.getNext(isSenioDelTres);
      if (DataService.userPlaying.isSeniorDelTres) {
        this.getNext(isSenioDelTres);
      }
    }else {
      DataService.getNextPlaying();
    }
  }

  toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }

  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
