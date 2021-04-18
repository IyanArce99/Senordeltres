import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-select-three',
  templateUrl: './select-three.page.html',
  styleUrls: ['./select-three.page.scss'],
})
export class SelectThreePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectTo() {
    this.router.navigate(['./gentleman-dices']);
  }

}
