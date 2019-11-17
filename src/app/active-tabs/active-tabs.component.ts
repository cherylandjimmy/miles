import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-active-tabs',
  templateUrl: './active-tabs.component.html',
  styleUrls: ['./active-tabs.component.css']
})
export class ActiveTabsComponent implements OnInit {
  comrade = false;
  firstname = '';
  lastname = '';
  stranger = false;
  submit = false;
  constructor() { }
  ngOnInit() {
  }
}
