import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-play-load-page',
  templateUrl: './play-load-page.component.html',
  styleUrls: ['./play-load-page.component.scss'],
})
export class PlayLoadPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  redirectTo(): void {
    DataService.selectSeniors = false;
    DataService.userPlaying = DataService.users[0];
    DataService.positionActual = 0;
    this.router.navigate(['/gentleman-dices']);
  }
}
