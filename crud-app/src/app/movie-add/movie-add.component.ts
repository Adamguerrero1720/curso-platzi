import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent {
  movie: Movie = { id: 0, title: '', releaseYear: 0, director: '', imageUrl: '' };

  constructor(private movieService: MovieService, private router: Router) { }

  addMovie(): void {
    this.movieService.addMovie(this.movie);
    this.router.navigateByUrl('/movies');
  }
}
