import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/pages/gentleman-dices/gentleman-dices.page';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-you-are',
  templateUrl: './you-are.component.html',
  styleUrls: ['./you-are.component.scss'],
})
export class YouAreComponent implements OnInit {
  isAlreadyToPlay: any = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((e)=>{
      if (e.isAlreadyToPlay) {
        this.isAlreadyToPlay = e.isAlreadyToPlay;
      }
    })
  }

  getLastUser(): User {
    return DataService.lastUser;
  }

  returnToDice(): void {
    if(this.isAlreadyToPlay && this.isAlreadyToPlay === 'true'){
      this.router.navigate(['/play-loader']);
    }else{
      this.router.navigate(['./gentleman-dices',{isAlreadyToPlay: this.isAlreadyToPlay}]);
    }
  }
}
