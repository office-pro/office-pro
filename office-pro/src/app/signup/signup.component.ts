import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

function passwordMatcher(c: AbstractControl)
{
  return c.get('password').value === c.get('confirmpassword').value? 
    'valid' : 'ininvalid'; 
}

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
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
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
    },{Validator: passwordMatcher});
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
