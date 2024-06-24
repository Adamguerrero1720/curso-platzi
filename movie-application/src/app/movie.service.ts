import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  director: string;
  description: string;
  year: number;
  imageURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private storageKey = 'movies';

  constructor() {}

  getMovies(): Movie[] {
    const movies = localStorage.getItem(this.storageKey);
    return movies ? JSON.parse(movies) : [];
  }

  getMovie(id: number): Movie | undefined {
    return this.getMovies().find(movie => movie.id === id);
  }

  addMovie(movie: Movie): void {
    const movies = this.getMovies();
    movie.id = new Date().getTime();
    movies.push(movie);
    localStorage.setItem(this.storageKey, JSON.stringify(movies));
  }

  updateMovie(updatedMovie: Movie): void {
    const movies = this.getMovies();
    const movieIndex = movies.findIndex(movie => movie.id === updatedMovie.id);
    if (movieIndex > -1) {
      movies[movieIndex] = updatedMovie;
      localStorage.setItem(this.storageKey, JSON.stringify(movies));
    }
  }

  deleteMovie(id: number): void {
    let movies = this.getMovies();
    movies = movies.filter(movie => movie.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(movies));
  }
}
