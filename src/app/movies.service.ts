import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class MoviesService {

  //private url: string = "http://www.omdbapi.com/?apikey=ee5c3346&t=" + this.sq;
  private url: string = "http://www.omdbapi.com/";

  constructor(private http: HttpClient) {
    //console.log('Hello moviesService provider');
  }

  getMovies(themovie) {
    let params = new HttpParams().set('t', themovie);
    //returns Observable
    return this.http.get(this.url + '?apikey=ee5c3346', {params})
  }

}
