import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
// import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  file:any;
  constructor() { 
    // translate.setDefaultLang('en');
    // translate.use('en');
  }

  ngOnInit() {
  }

}
