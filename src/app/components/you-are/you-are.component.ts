import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/pages/gentleman-dices/gentleman-dices.page';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-you-are',
  templateUrl: './you-are.component.html',
  styleUrls: ['./you-are.component.scss'],
})
export class YouAreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  getLastUser(): User {
    return DataService.lastUser;
  }

  returnToDice(): void {
    this.router.navigate(['./gentleman-dices']);
  }
}
