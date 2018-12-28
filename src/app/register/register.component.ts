import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SnackBarComponent } from '../ui/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material';
import { AlertService, UserService, AuthenticationService } from '../_services';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  snackbar: SnackBarComponent;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private matsnackbar: MatSnackBar

  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
    this.snackbar = new SnackBarComponent(matsnackbar);

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.snackbar.openSnackBar('Registration failed. Please try again.', 'Exit');

      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.snackbar.openSnackBar('Registration successful!', 'Exit');
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/success']);
        },
        error => {
          this.snackbar.openSnackBar(error, 'Exit');
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
