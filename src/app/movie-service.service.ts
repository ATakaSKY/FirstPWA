import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import 'rxjs/Rx';

// import { environment } from '../environments";

@Injectable()
export class MovieService {

  private moviedb_url:string = 'https://api.themoviedb.org/3/movie/';
  private moviesdb_url:string = 'https://api.themoviedb.org/3/movie/150?api_key=';
  private _movies: Observable<any[]>;

  constructor(private http:Http) { 
    this._movies = this.fetchMovies();
  }

  fetchMovies():Observable<any[]>{
    return this.http.get(this.moviesdb_url + "f026fb6f1a4878310b2b1a407a356b52")
    .map(response => {
      console.log(response.json());
      return response.json();
    })
  }

  queryMovie(id:string):Observable<any>{
    return this.http.get(this.moviedb_url + id + '?api_key=' + "f026fb6f1a4878310b2b1a407a356b52")
    .map(response => {
      console.log(response.json());
      return response.json();
    })
  }

}
