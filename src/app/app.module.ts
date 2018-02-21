import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MoviesService } from './movies.service';

import { FeaturedComponent } from './featured/featured.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { TruncateLessMorePipe } from './truncate-less-more.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FeaturedComponent,
    NavigationComponent,
    SearchComponent,
    TruncateLessMorePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
