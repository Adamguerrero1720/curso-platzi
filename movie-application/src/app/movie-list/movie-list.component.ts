// movie-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  editingMovie: Movie | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movies = this.movieService.getMovies();
  }

  deleteMovie(id: number): void {
    this.movieService.deleteMovie(id);
    this.loadMovies();
  }

  editMovie(movie: Movie): void {
    this.editingMovie = { ...movie };
  }

  cancelEdit(): void {
    this.editingMovie = null;
  }

  onSubmit(): void {
    if (this.editingMovie) {
      this.movieService.updateMovie(this.editingMovie);
      this.loadMovies();
      this.cancelEdit();
    }
  }
}
