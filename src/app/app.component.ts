import { Component, Injectable } from '@angular/core';
import { MoviesService } from './movies.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from './models/movie.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

}
