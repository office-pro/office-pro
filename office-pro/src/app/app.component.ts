import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Abouts } from './about/abouts';
import { TaskService } from './task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit(): void {
    
  }
}
