import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Cheryl and Jimmy';
  displayQA = false;
  genderReveal = false;
  constructor() { }

  ngOnInit(): void {

  }

}
