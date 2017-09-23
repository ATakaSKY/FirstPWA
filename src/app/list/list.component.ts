import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie-service.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies:any;
  public posterUrl: string = 'https://image.tmdb.org/t/p/w160';

  constructor(private movieService:MovieService) { }

  ngOnInit() {
let movies:any;
    this.movieService.fetchMovies().subscribe(res => {
      this.movies=res;
    });
  }

}
