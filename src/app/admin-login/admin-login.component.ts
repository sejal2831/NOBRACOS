import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']

})
export class AdminLoginComponent implements OnInit {
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
    if(this.username=="admin" && this.password=='admin')
    {
      console.log("Welcome")
    }
    else
    {
      console.log("invalid credentials")
    }
  }


}
