import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-thank-you',
  templateUrl: './button-thank-you.component.html',
  styleUrls: ['./button-thank-you.component.sass']
})
export class ButtonThankYouComponent  {
  displayPhotos: boolean = false;

  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() { }

  sendMessage() {
    this.displayPhotos = !this.displayPhotos;
    this.messageEvent.emit(this.displayPhotos)
  }
}
