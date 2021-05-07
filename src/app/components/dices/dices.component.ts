import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss'],
})
export class DicesComponent implements OnInit {
  showButtonNextUser: boolean;
  actualPlayerIsSeniorDelTres: boolean;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    // Creamos un observer para cuando llegue por param isAlreadyToPlay === 'false' lanzar la alerta o el component que sea necesario posteriormente.
    this.activatedRoute.params.subscribe((e)=>{
      if (e.isAlreadyToPlay && e.isAlreadyToPlay !== 'false'){
        alert('Ya salieron todos sorteados');
      }
    })
  }

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
    }else{
      this.showButtonNextUser = true;
    }
  }  

  getNext(isSenioDelTres: boolean): void {
    this.showButtonNextUser = false;    
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
