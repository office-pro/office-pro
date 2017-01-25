import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  private login= {};
  constructor() { }

  Submit() :void{
    alert(JSON.stringify(this.login))
  }

  ngOnInit() {
  }

}
