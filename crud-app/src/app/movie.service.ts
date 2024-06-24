import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Movie {
  id: number;
  title: string;
  releaseYear: number;
  director: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    { id: 1, title: 'Inception', releaseYear: 2010, director: 'Christopher Nolan', imageUrl: 'https://example.com/inception.jpg' },
    { id: 2, title: 'The Dark Knight', releaseYear: 2008, director: 'Christopher Nolan', imageUrl: 'https://example.com/dark_knight.jpg' },
    { id: 3, title: 'Interstellar', releaseYear: 2014, director: 'Christopher Nolan', imageUrl: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/interstellar/posters/18799170-1-esl-ES/Posters.jpg?crop=1xw:0.6401551891367604xh;center,top&resize=1200:*' }
  ];

  constructor() { }

  getMovies(): Observable<Movie[]> {
    return of(this.movies);
  }

  getMovieById(id: number): Observable<Movie | undefined> {
    return of(this.movies.find(movie => movie.id === id));
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }

  updateMovie(updatedMovie: Movie): void {
    const index = this.movies.findIndex(movie => movie.id === updatedMovie.id);
    if (index !== -1) {
      this.movies[index] = updatedMovie;
    }
  }

  deleteMovie(id: number): void {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }
}
