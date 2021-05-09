import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/pages/gentleman-dices/gentleman-dices.page';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-play-load-page',
  templateUrl: './play-load-page.component.html',
  styleUrls: ['./play-load-page.component.scss'],
})
export class PlayLoadPageComponent implements OnInit {
  message: string;
  constructor(private router: Router) { }

  ngOnInit() {
    let messageSenioresDelTres: string = '';
    let seniorsDelTres: User[] = DataService.users.filter(user=> user.isSeniorDelTres);

    seniorsDelTres.forEach((user, index)=>{
      if (index > 0){
        if (index === (seniorsDelTres.length -1 )){
          messageSenioresDelTres +=' y ';
        }else {
          messageSenioresDelTres += ', '
        }
      }
      messageSenioresDelTres += user.username;
    })

    this.message = messageSenioresDelTres + ' son los señores del tres.';
  }

  redirectTo(): void {
    DataService.selectSeniors = false;
    DataService.userPlaying = DataService.users[0];
    DataService.positionActual = 0;
    this.router.navigate(['/gentleman-dices']);
  }
}
