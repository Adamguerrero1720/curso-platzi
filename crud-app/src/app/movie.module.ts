import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieService } from './movie.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieEditComponent,
    MovieAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Importar FormsModule para utilizar ngModel
    RouterModule // Si también estás utilizando rutas en este módulo
  ],
  providers: [MovieService] // Aquí se agregan los servicios que necesita el módulo
})
export class MoviesModule { }
