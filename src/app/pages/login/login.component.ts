import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userNameFormControl = new FormControl(null, [Validators.required,Validators.email]);;
  public passwordFormControl = new FormControl(null, [Validators.minLength(4)]);
  public userForm! : FormGroup;
  constructor(private _Router:Router){}
  ngOnInit(): void {
    this.userForm = new FormGroup ({
      userName : this.userNameFormControl,
      password : this.passwordFormControl
    })
  }

  submit() {
  if(this.userForm.value){
    this._Router.navigate(['home'])
  }else{
    alert("your mail or passord is wrong!")
  }
  
  }
}
