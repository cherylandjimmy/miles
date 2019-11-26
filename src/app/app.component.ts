import { Component  } from '@angular/core';
//import { ButtonThankYouComponent } from "./button-thank-you/button-thank-you.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // title = 'Cheryl and Jimmy';
  // displayQA = false;
  // genderReveal = false;

  constructor() { } 

  displayPhotos:Boolean;
  genderAnswered($event) {
    this.genderAnswer = $event;
  }
  receiveMessage($event) {
    this.displayPhotos = $event
  }
}
