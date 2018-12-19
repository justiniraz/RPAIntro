import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-screen',
  templateUrl: './success-screen.component.html',
  styleUrls: ['./success-screen.component.scss']
})
export class SuccessScreenComponent {
  now: number;
  today = new Date();
  minutes = '';

  constructor(private router: Router) {
    setInterval(() => {
      this.now = Date.now();
    }, 1);

    this.minutes = formatDate(this.today, 'mm', 'en-US', '-0500');
  }

  btnClick() {
    this.router.navigate(['/dashboard']);
  }
}


