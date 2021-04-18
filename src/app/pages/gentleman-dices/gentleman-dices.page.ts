import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-gentleman-dices',
  templateUrl: './gentleman-dices.page.html',
  styleUrls: ['./gentleman-dices.page.scss'],
})
export class GentlemanDicesPage implements OnInit {
   usersPlaying: any;

  constructor(private storage: Storage) {
    this.storage.create();
   }

  async ngOnInit() {
    let arr: any = [];
    let result: string = await this.storage.get('users');
    arr.push(result);
    this.usersPlaying = arr[0];
    // console.log(arr[0]);

    console.log( typeof arr);
    
  }


  nextUser () {

  }

}

