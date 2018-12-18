import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { SuccessScreenComponent } from './success-screen/success-screen.component';

const routes: Routes = [
  { path: '', component: WelcomeScreenComponent },
  { path: 'success', component: SuccessScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
