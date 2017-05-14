import { Component, Input, Output, EventEmitter, OnInit, trigger, state, 
          style, transition, animate } from '@angular/core';
import { Abouts } from './about/abouts';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
     trigger('flyOut', [
       state('inactive', style({
         backgroundColor: '#eee'
       })),
       state('active',style({
         backgroundColor: '#cfd8dc'
       })),
      transition("inactive <=> active", animate( "3000ms" ))
       ]),
       trigger("fadeInOut", [
      state("open", style({opacity: 1})),
      state("closed", style({opacity: 0})),
      transition("open <=> closed", animate( "3000ms" )),
    ])
       
       ]
      
  
})
export class AppComponent implements OnInit {
  isDarkTheme= false;
  value = false;
  state = 'inactive';
  side = 'open';
  
  ngOnInit(): void {
  }
   selected = '';
    items = [
      {text: 'Refresh'},
      {text: 'Settings'},
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

   beginAnim() {
     // toggle state to kickstart animation
      this.state = this.state === 'open' ? 'closed' : 'open';
  }

  toggleSidebar(value){
    this.value = value;
    this.state = 'inactive'
    if(this.value){
     this.state = 'active'
    }
}
}
