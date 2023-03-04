import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
username:string;
password:string;
  constructor() {
    this.username=''
    this.password=''
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
    if(this.username=="user" && this.password=='user')
    {
      console.log("Welcome")
    }
    else
    {
      console.log("invalid credentials")
    }
  }

}
