import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, MovieService } from '../movie.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  loadingError = false;

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies()
      .pipe(
        catchError(error => {
          console.error('Error loading movies:', error);
          this.loadingError = true;
          return of([]); // Return empty array on error
        })
      )
      .subscribe(movies => {
        this.movies = movies;
      });
  }

  editMovie(id: number): void {
    this.router.navigate(['movies/edit', id]);
  }

  deleteMovie(id: number): void {
    this.movieService.deleteMovie(id);
    this.movies = this.movies.filter(movie => movie.id !== id);
  }

  addMovie() {
    this.router.navigate(['/movies/add']);
  }
}
