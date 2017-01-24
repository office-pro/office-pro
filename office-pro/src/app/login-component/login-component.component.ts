import { Component, OnInit, Input } from '@angular/core';
import { Login } from './login';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  username:string;
  password:string;
  login:Login = new Login();
  constructor() { 

  }

  Submit() :void{
    alert("I am in submit "+ this.username);
    this.login.userName = this.username;
    this.login.password = this.password;
    alert(JSON.stringify(this.login))
  }

  ngOnInit() {
  }

}
