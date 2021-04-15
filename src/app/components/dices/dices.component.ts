import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss'],
})
export class DicesComponent implements OnInit {

  constructor() { }

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
    console.log(this.dicesResult);
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
