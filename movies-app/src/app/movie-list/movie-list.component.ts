import { Component, OnInit } from '@angular/core';
import { Movie, MovieService} from '../movie.service';
import { MovieFormComponent } from '../movie-form/movie-form.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieListComponent, MovieFormComponent, MovieService],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void{
    this.loadMovies();
  }

  loadMovies(){
    this.movies = this.movieService.getMovies();
  }

  deleteMovie(id:number): void{
    this.movieService.deleteMovie(id);
    this.loadMovies();
  }
}
