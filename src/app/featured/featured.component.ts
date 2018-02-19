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

    presetMovie_01: string = "Guardians of the Galaxy";
    presetMovie_02: string = "Source Code";

    movie: any;
    movie2: any;

    constructor(private moviesService : MoviesService){}

    //Observable object to IMovie array
    ngOnInit() {
      this.movie = this.moviesService.getFeaturedMovie(this.presetMovie_01)
      .subscribe(data => this.movie = data);
      this.movie2 = this.moviesService.getFeaturedMovie(this.presetMovie_02)
      .subscribe(data => this.movie2 = data);
      //.subscribe(data => console.log(data));
    }

}
