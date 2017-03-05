import { Component, OnInit, ViewChild  } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  title = "service";
    dogs = [ { name : "dog1", rows: 1},
           { name : "dog2",rows: 1},
           { name : "dog3", rows: 2},
           { name : "dog4", rows: 1},
           { name : "dog5", rows: 1},
           { name : "dog6", rows: 1}
         ];
  constructor() { }

  ngOnInit() {
  }
@ViewChild('sidenav') sidenav :MdSidenav;
  close() :void {
    this.sidenav.toggle();
  }
}
