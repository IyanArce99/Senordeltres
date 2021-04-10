import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  showLoader: boolean;
  p_bar_value: number;
  logo = "assets/logo.png";

  constructor() { }

  ngOnInit() {
    this.runDeterminateProgress();
  }


  runDeterminateProgress() {
    for (let index = 0; index <= 100; index++) {
      this.setPercentBar(+index);
    }
  }

  setPercentBar(i) {
    setTimeout(() => {
      let apc = (i / 100)
      console.log(apc);
      this.p_bar_value = apc;
    }, 60 * i);
  }

  
}

