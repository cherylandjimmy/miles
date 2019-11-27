import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-card-photos',
  templateUrl: './card-photos.component.html',
  styleUrls: ['./card-photos.component.css']
})
export class CardPhotosComponent implements OnInit {
  data:object ;
  list:Array<any> = [
    {src:'https://lh3.googleusercontent.com/9oXXeJO8nzU8Q8lUwgsJA8ell6dGJRcQ7Tf7G7Si4CaXfhBB3U7jR8mxYhZ_EGCoELBMinkTchriBCI4Lkz9LrXCm20W_VJ0zAQcAZPcg-wh_2rYpbgLXGt1O3L4arX3M9hvZaI5qJFa1e83R_h5-qFZe43Vg0Cgax1CPBcwnzaPxjIUDaz6CYGGB-9oo_Asl_KFXfpOQHzj8FAGxFRP3HVvmh8ZXQejMaMjpbGmnmIN-Qv5ICOqvA-XvOINVLHxcRaWkOsZk_pnpa-sqzZ9Rkld1V44-ZqJLEKwy3E-x_JE8YItoPVj_ObuYNSxIsr-JFQBCBDfOohcLxBUUmWouNq4sB_3uHq7vLIucL3LglqSrxR4wUKwlwSRb7SgIgXslNwnwDOU_8O6K1cVitW1PPWljh94bKEE1bUuIINq6aRoOmRu3mw982d3D7N7u-4WeHWj9CGiVliwKWCc_duKq2r6_08xrahSDKvKjC-9F2AvqLdS6B3QoYm9ljFNFU9WfrVoIWFSKC1xFyQnJ9qvYoQovzYj2gMl2Vb2V_7IeZxiSwfu4RhdomyONhTJmEN6QkOOvX-hfSaZ0ZhMm9W2GIrAoAu7wPl2km7dZM6xTld-3kl4Rk1HAQTemjro4XcTF9GHzgumUn7aQZ4ejUufHWxmYdoN652oTklh86tHS8AEv5K-ArGZTm6R1qhK_mtX704IkymrsKadofXdJluJk_jRr___v7yZmqRBsoff8mZq_myh=w687-h915-no', 
    option: {one: 'Ready', two:'Skip'}, title:'Jimmy And Cheryl', subtitle:"Guess our baby's gender?", text:'Are you ready?'},
    
    {src:'https://lh3.googleusercontent.com/7ZKbFIkqJ5iJEeUUYPJmLW-_LbptRq8Rf5a1hq-MmwMHzIGkt27vRgWuFskFbjXCxDoIUAbDTw-y4Yb9xaGsQM1ONx-Aa7eXARrcBLgluGxKgxcZqZ7P0q1iK15-W-q9hTmcvGcxir0=w1920-h1080',
    option: {one: 'Boy', two: 'Girl'}, title:"Guess our baby's gender?", subtitle:"Here's a hint", 
    text:""},
    
    {src:'https://lh3.googleusercontent.com/7ZKbFIkqJ5iJEeUUYPJmLW-_LbptRq8Rf5a1hq-MmwMHzIGkt27vRgWuFskFbjXCxDoIUAbDTw-y4Yb9xaGsQM1ONx-Aa7eXARrcBLgluGxKgxcZqZ7P0q1iK15-W-q9hTmcvGcxir0=w1920-h1080', 
    option: {one: 'Next'}, title:"Gender Reveal", subtitle:"It's a boy!", 
    text:"We are having a boy! His name will be Miles and he is currently 34 weeks old."},

    {src:'https://lh3.googleusercontent.com/26Db1Jh0EDTSIvkEK-c0qJehSsKmeAX65VQTSh1Be5YdeZfEtTVFIjlQDKEOhYG0IbHGil0MAvK90ZauiGOEQtHv4A3RUDV6x1FwzNeK7gFuEdAKZeI8He5zi-AXg9XLR_7_nwIet8Y=w1920-h1080', 
     additionalOption:[{text:'Amazon Baby Registry', link:'https://www.amazon.com/baby-reg/cheryl-chen-december-2019-bayside/1VIH5T2HEBS12'},
     {text:'Buy Buy Baby Registry', link:'https://www.buybuybaby.com/store/giftRegistry/viewRegistryOwner/myItems/548206035'}],

     option: {one:'',two:''}, title:'We are now ready to accept your contributions', subtitle:"", text:"Thank you for your support!"},
    
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
