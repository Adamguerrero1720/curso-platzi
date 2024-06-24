import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieAddComponent } from './movie-add/movie-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/edit/:id', component: MovieEditComponent },
  { path: 'movies/add', component: MovieAddComponent },
  { path: '**', redirectTo: '/movies', pathMatch: 'full' } // Ruta por defecto en caso de ruta incorrecta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
