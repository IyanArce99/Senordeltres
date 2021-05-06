import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss'],
})
export class DicesComponent implements OnInit {
 
  constructor(private router: Router) { }

  ngOnInit() {}

  dicesResult = [];

  rollDice() {
    const dices = <any>document.querySelectorAll(".die-list");
    const dice = [...dices];
    dice.forEach((die, i) => {
      this.toggleClasses(die);
      const number = this.getRandomNumber(1, 6);
      this.dicesResult[i] = number;
      die.dataset.roll = number;
    });
   
    this.getNext(this.dicesResult.includes(3));

    // Hago un setTimeout con la espera de 1.4s para espera a que termine la animación de los dados.
    setTimeout(()=>{
      if (DataService.halfOfUsers === DataService.quantitySeniorsDelTres) {
        alert('Ya salieron todos sorteados');
      }
    }, 1400);
  }

  getNext(isSenioDelTres: boolean): void {
    if (isSenioDelTres) {
      setTimeout(()=>{
        this.router.navigate(['./you-are']);
      }, 1500);
    }
    
    DataService.getNext(isSenioDelTres);
    if (DataService.userPlaying.isSeniorDelTres) {
      this.getNext(isSenioDelTres);
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
