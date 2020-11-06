import { Injectable } from '@angular/core';
import { MOVIE } from '../component/movie/mockmovielist';
import { Movie } from '../component/movie/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getAllMovies(): Movie[] {
    return MOVIE;
  }

 getMovie(id): Movie {
    return MOVIE.find(movie => movie.id === id)
  }
}
