import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "Audrey";
  password = "1234";
  message = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(logForm: any){
    
    if(logForm.value.username == this.username && logForm.value.password == this.password){
      this.router.navigate(["products"]);
    }else{
      this.message = true;
    }
  }

}
