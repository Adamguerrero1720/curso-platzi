import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html'
})
export class MovieFormComponent implements OnInit {
  movie: Movie = { id: 0, title: '', director: '', description: '', year: 0, imageURL: '' };
  isEditMode = false;
  showForm = false; // Control de visibilidad del formulario

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      const movie = this.movieService.getMovie(Number(id));
      if (movie) {
        this.movie = movie;
      }
    }
  }

  saveMovie(): void {
    if (this.isEditMode) {
      this.movieService.updateMovie(this.movie);
    } else {
      this.movieService.addMovie(this.movie);
    }
    this.showForm = false; // Ocultar el formulario después de guardar
    window.location.reload(); // Recargar la página para reflejar los cambios
  }

  showAddForm(): void {
    this.showForm = true; // Mostrar el formulario al hacer clic en "Agregar"
  }
}
