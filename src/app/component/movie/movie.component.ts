import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MOVIE } from './mockmovielist';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {

  movie: Movie = {
    title: "",
    year: 0,
    image: "",
    rating: 0
  }

  movieList = MOVIE;
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    const tempMovie: Movie = { ...this.movie }
    this.movieList.push(tempMovie)
  }
}
