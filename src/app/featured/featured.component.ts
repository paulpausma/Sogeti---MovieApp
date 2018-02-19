import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from './../movies.service';
import { IMovie } from './../movie';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-featured', //<app-featured>
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})

export class FeaturedComponent implements OnInit {

    movie: Observable<IMovie[]>;
    movie2: Observable<IMovie[]>;

    constructor(private moviesService : MoviesService){}

    //Observable object to IMovie array
    ngOnInit(): Observable<IMovie[]> {
      this.movie = this.moviesService.getMovies("bridge of spies")
      .subscribe(data => this.movie = data);
      this.movie2 = this.moviesService.getMovies("Avatar")
      .subscribe(data => this.movie2 = data);
      //.subscribe(data => console.log(data));
    }

}
