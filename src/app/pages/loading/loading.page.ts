import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"; 

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  showLoader: boolean;
  p_bar_value: number;
  logo = "assets/logo.png";

  constructor(private router: Router) { }

  ngOnInit() {
    this.runDeterminateProgress();
  }


  runDeterminateProgress() {
    for (let index = 0; index <= 100; index++) {
        this.setPercentBar(+index);
    }
  }

  setPercentBar(i) {
    debugger;
    setTimeout(() => {
      let apc = (i / 100)
      this.p_bar_value = apc;
      if (this.p_bar_value === 1) {
        this.router.navigate(['./add-users']);
      }

    }, 30 * i);

  }

  
}

