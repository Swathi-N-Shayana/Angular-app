import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-movietrailer',
  templateUrl: './movietrailer.component.html',
  styleUrls: ['./movietrailer.component.scss']
})
export class MovietrailerComponent implements OnInit {

  movie: Movie;
  url: SafeResourceUrl;
  
  constructor(private movieservice : MovieService,
    private activatedRoute : ActivatedRoute,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('movieid');
    this.movie = this.movieservice.getMovie(id);
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer);
  }
}
