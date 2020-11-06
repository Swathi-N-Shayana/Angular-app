import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-movietrailer',
  templateUrl: './movietrailer.component.html',
  styleUrls: ['./movietrailer.component.scss']
})
export class MovietrailerComponent implements OnInit {

  movie : Movie;
  constructor( private movieservice : MovieService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('movieid');
    this.loadMovie(id)
  }

  loadMovie(id : string) : void {
    this.movie = this.movieservice.getMovie(id)
  }
}
