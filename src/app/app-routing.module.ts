import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { PaymentProcessComponent } from './components/payment-process/payment-process.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'checkout', component: PaymentProcessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
