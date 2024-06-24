import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

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
}