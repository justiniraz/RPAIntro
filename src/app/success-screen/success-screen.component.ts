import { Component, OnInit, OnDestroy } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { UserService, AuthenticationService } from '../_services';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-success-screen',
  templateUrl: './success-screen.component.html',
  styleUrls: ['./success-screen.component.scss']
})
export class SuccessScreenComponent implements OnInit, OnDestroy {
  now: number;
  today = new Date();
  minutes = '';

  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService) {

    setInterval(() => {
      this.now = Date.now();
    }, 1);

    this.minutes = formatDate(this.today, 'mm', 'en-US', '-0500');

    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  btnClick() {
    this.router.navigate(['/dashboard']);
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers()
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
}


