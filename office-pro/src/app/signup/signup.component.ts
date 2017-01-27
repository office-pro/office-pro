import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form :FormGroup;
  constructor(public _formBuilder:FormBuilder) {
    this.form = this._formBuilder.group({
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      confirmpassword: '',
      phone: this._formBuilder.group({
        mobilenumber: '',
        officenumber:''
      }),
      address: this._formBuilder.group({
        flatno: '',
        buildingname: '', 
        street: '',
        city: '',
        state: '',
        pincode: ''
      }),
      referralcode: '',
    });
   }

  ngOnInit() {
  }
  Submit() {
    alert(JSON.stringify(this.form.value));
  }
  Reset() {
    this.form.value = '';
  }

}
