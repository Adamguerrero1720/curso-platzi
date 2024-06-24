import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [MovieFormComponent, MovieListComponent, MovieService],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css'
})

export class MovieFormComponent implements OnInit {
  movieForm: FormGroup;
  movieId?: number;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      releaseYear: ['', [Validators.required, Validators.min(1950)]]
    });
  }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['id'];
    if (this.movieId) {
      const movie = this.movieService.getMovie(this.movieId);
      if (movie) {
        this.movieForm.patchValue(movie);
      }
      }
  }
  onSubmit(): void {
    if (this.movieForm.valid) {
      const movie: Movie = this.movieForm.value;
      if (this.movieId) {
        movie.id = this.movieId;
        this.movieService.updateMovie(movie);
      } else {
        this.movieService.addMovie(movie);
      }
      this.router.navigate(['/']);
    }
  }
}
