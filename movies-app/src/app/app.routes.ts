import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';

export const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'add', component: MovieFormComponent },
  { path: 'edit/:id', component: MovieFormComponent },
];

  export class AppRoutingModule { }