import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-card-photos',
  templateUrl: './card-photos.component.html',
  styleUrls: ['./card-photos.component.css']
})
export class CardPhotosComponent implements OnInit {
  data:object;
  list:object = [
    {src:'https://lh3.googleusercontent.com/26Db1Jh0EDTSIvkEK-c0qJehSsKmeAX65VQTSh1Be5YdeZfEtTVFIjlQDKEOhYG0IbHGil0MAvK90ZauiGOEQtHv4A3RUDV6x1FwzNeK7gFuEdAKZeI8He5zi-AXg9XLR_7_nwIet8Y=w1920-h1080', 
    option: {one: 'Boy', two: 'Girl'}, title:'Jimmy And Cheryl', subtitle:"Guess the baby's gender?", text:'Is it a boy or a girl?'},
    {src:'', option: {one: 'Next'}, title:"Gender Reveal", subtitle:"It's a boy!", 
    text:"We are having a boy! Miles is currently 34 weeks old. He's now ready to accept your contributions!"},
  ];
  answer: string = '';
  @Output() genderAnswered = new EventEmitter<boolean>();
  @Input() displayOption : number;
  constructor() { }

  sendMessage(value) {
    this.genderAnswered.emit(value);
  }

  ngOnInit() {
    this.data = this.list[this.displayOption||0];
  }

}
