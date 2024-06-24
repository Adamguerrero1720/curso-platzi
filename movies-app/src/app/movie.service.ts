import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  director: string;
  releaseYear: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private storageKey = 'movies';

  constructor() { }

  getMovies(): Movie[] {
    const movies = localStorage.getItem(this.storageKey);
    return movies ? JSON.parse(movies) : [];
  }
  getMovie(id:number): Movie | undefined {
    return this.getMovies().find(movie => movie.id === id)
  }

  addMovie(movie: Movie): void {
    const movies = this.getMovies();
    movie.id = new Date().getTime();
    movies.push(movie);
    localStorage.setItem(this.storageKey, JSON.stringify(movies));
  }

  updateMovie(updatedMovie: Movie): void {
    const movies = this.getMovies();
    const index = movies.findIndex(movie => movie.id === updatedMovie.id);
    if (index > -1) {
      movies[index] = updatedMovie;
      localStorage.setItem(this.storageKey, JSON.stringify(movies));
    }
  }

  deleteMovie(id: number): void {
    const movies = this.getMovies();
    const filteredMovies = movies.filter(movie => movie.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(filteredMovies));
  }
}
