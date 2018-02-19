import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { IMovie } from './movie';

@Injectable()
export class MoviesService {

  private _url: string = "http://www.omdbapi.com/?apikey=ee5c3346&t=guardians%20of%20the%20galaxy";

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(this._url);
  }

}
