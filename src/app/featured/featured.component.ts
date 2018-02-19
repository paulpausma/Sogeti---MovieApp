import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from './../movies.service';
import { IMovie } from './../movie';

@Component({
  selector: 'app-featured', //<app-featured>
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})

export class FeaturedComponent implements OnInit {

    public movie: <IMovie>;

    constructor(private _moviesService : MoviesService){}

    ngOnInit() {
      this._moviesService.getMovies()
      .subscribe(data => this.movie = data);
    }

}
