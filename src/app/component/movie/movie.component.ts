import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from 'src/app/service/movie.service';

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
    rating: 0,
    id:'',
    trailer:''
  }

  movieList : Movie[];

  constructor(private movieservice: MovieService ) { }

  ngOnInit(): void {
    this.loadmovie()
  }

  save():void {
    this.movie.id = this.getRandomString()
   const tempMovie: Movie = { ...this.movie }
    this.movieList.push(tempMovie)
  }
  getRandomString(): string {
    return Math.floor(Math.random() * Math.floor(30000)).toString()
  }

  loadmovie():void {
    this.movieList = this.movieservice.getAllMovies()
  }
}
