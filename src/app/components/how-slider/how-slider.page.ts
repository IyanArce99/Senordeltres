import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-how-slider',
  templateUrl: './how-slider.page.html',
  styleUrls: ['./how-slider.page.scss'],
})
export class HowSliderPage implements OnInit {
  @ViewChild('mySlider')  slides: IonSlides;

  slideOpts = {
    speed: 400
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  slideNext() {
    this.slides.slideNext();
  }

  goPlayersScreen() {
    this.router.navigate(['./add-users']);
  }

}
