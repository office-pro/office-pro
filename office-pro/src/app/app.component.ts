import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Abouts } from './about/abouts';
import { TaskService } from './task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app works!';
  dogs = [ { name : "dog1", rows: 2},
           { name : "dog2",rows: 1},
           { name : "dog3", rows: 3 },
           { name : "dog4", rows: 2},
           { name : "dog5", rows: 1},
           { name : "dog6", rows: 3}
         ];
  ngOnInit(): void {
    
  }
 
}
