import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { HeaderComponent } from './ui/header/header.component';
import { SuccessScreenComponent } from './success-screen/success-screen.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from '../service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './ui/footer/footer.component';
import { SnackBarComponent } from './ui/snack-bar/snack-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import 'hammerjs';
import { ErrorComponent } from './error/error.component';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatToolbarModule } from "@angular/material";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    HeaderComponent,
    SuccessScreenComponent,
    DashboardComponent,
    FooterComponent,
    SnackBarComponent,
    ErrorComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    AngularFontAwesomeModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
