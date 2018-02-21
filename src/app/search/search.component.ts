import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from './../movies.service';
import { IMovie } from './../movie';
import { TruncateLessMorePipe } from '../truncate-less-more.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  btnText: string = "Search";
  visible = false;
  searchQuery: string;
  plotLength: string;
  movie: any;
  more: boolean;

  constructor(private moviesService : MoviesService) { }

  ngOnInit() {

  }

  selectChangeHandler(event: any) {
    this.plotLength = event.target.value;
    //console.log(this.plotLength);
  }

  searchMovie() {
    this.movie = this.moviesService.searchMovie(this.searchQuery, this.plotLength)
    .subscribe(data => this.movie = data);

    this.visible = true;
  }

  showMore() {
   this.more = !this.more;
  }

}
