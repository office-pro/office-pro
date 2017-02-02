import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Abouts } from './about/abouts';
import { TaskService } from './task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isDarkTheme= false;

  ngOnInit(): void {
  }
   selected = '';
    items = [
      {text: 'Refresh'},
      {text: 'Settings'},
      {text: 'Change Theme'},
      {text: 'Help', disabled: true},
      {text: 'Sign Out'}
    ];

  iconItems = [
    {text: 'Redial', icon: 'dialpad'},
    {text: 'Check voicemail', icon: 'voicemail', disabled: true},
    {text: 'Disable alerts', icon: 'notifications_off'}
  ];

  select(text: string) { 
    this.selected = text;

    if(text == 'Refresh'){
      alert("hii")
      window.location.reload();
    }
     }
}
