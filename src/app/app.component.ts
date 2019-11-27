import { Component, OnInit } from '@angular/core';
//import { ButtonThankYouComponent } from "./button-thank-you/button-thank-you.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ready: boolean = false;
  optionDisplay: number = 0;
  displayPhotos: Boolean;
  genderAnswer: string;

  ngOnInit() {
    var v_stage = sessionStorage.getItem('ff');
    if (v_stage == null) {
      this.optionDisplay = 0;
      this.ready = false;
      this.genderAnswer = '';
      sessionStorage.remoteItem('ff');
      this.ready = false;
    }
    else {
      this.optionDisplay = Number(v_stage);
      this.ready = true;
      
    }
  }

  genderAnswered($event) {
    this.genderAnswer = $event;
    if ($event == "Start Over") {
      this.optionDisplay = 0;
      this.ready = false;
      this.genderAnswer = '';
    }
    else if ($event == "Skip") {
      this.optionDisplay = 2;
      this.ready = true;
      this.genderAnswer = "Boy";
    }
    else if ($event == "Ready") {
      this.ready = true;
      this.optionDisplay = 1;
    }
    else if ($event == "Next") {
      sessionStorage.setItem('ff', '3');
      this.optionDisplay = 3;
    }
    else {
      this.ready = true;
      this.optionDisplay = $event == "Boy" ? 2 : 2;
    }
  }
  receiveMessage($event) {
    this.ready = false;
    this.genderAnswer = '';
    this.optionDisplay = 0;
    sessionStorage.remoteItem('ff');
    //this.displayPhotos = $event;
    //this.optionDisplay = $event == "Boy" ? 2 : 1;
  }
}
