import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService } from "../movie-service.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  id;
  public posterUrl: string = 'https://image.tmdb.org/t/p/w320';
  movie:any;

  constructor(private route: ActivatedRoute, private router:Router, private movieService:MovieService) { }

  ngOnInit() {
    this.id = this.route.params.subscribe(params => {
      this.movieService.queryMovie(params.id).subscribe(movie => {
        this.movie = movie;
      })
    })
  }

  goToMovies(){
    this.router.navigate(['/']);
  }

}
