import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarComponent } from '../ui/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  snackbar: SnackBarComponent;


  constructor(private router: Router, private formBuilder: FormBuilder, private matsnackbar: MatSnackBar) {
    this.snackbar = new SnackBarComponent(matsnackbar);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.snackbar.openSnackBar('We can\'t log in you in. Please try again.', 'Exit');
      return;
    }

    this.router.navigate(['success/']);

  }

}
