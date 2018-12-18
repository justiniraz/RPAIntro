import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

  user = new User('', '', '', '');

  userList = {
    "admin@cedrus.digital": "password",
    "test@cedrus.digital": "test"
  };


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.user.email in this.userList) {
      if (this.userList[this.user.email] === this.user.password) {
        this.router.navigate(['success/']);
      }
      else{
        alert("Invalid password. Try again.");
        
      }
    }
    else{
      alert("Invalid username. Try again.");
      
    }

  }

}
