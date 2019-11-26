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
  ready:boolean=false;
  optionDisplay:number = 0;
  displayPhotos:Boolean;
  genderAnswered($event) {
    this.genderAnswer = $event;
    console.log($event,this.genderAnswer );
    if ($event =="Start Over"){
      this.optionDisplay = 0;
      this.ready = false;
      this.genderAnswer = false;
    }
    else if ($event =="Skip")
    {
      this.optionDisplay = 2;
      this.ready = true;
      this.genderAnswer = "Boy";
    }
    else if ($event == "Ready")
    {
      this.ready=true; 
      this.optionDisplay=1;
    }
    else if ($event =="Next")
    {
      this.optionDisplay = 3;
    }
    else
      { 
        this.ready=true;
        this.optionDisplay = $event== "Boy" ? 2: 2;
        console.log(   this.optionDisplay)
    }
  }
  receiveMessage($event) {
    console.log($event)
    
    this.displayPhotos = $event;
    this.optionDisplay = $event == "Boy" ? 2: 1;
}
}
