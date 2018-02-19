import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesService } from './movies.service';

import { HomeComponent } from './home/home.component';
import { FeaturedComponent } from './featured/featured.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedComponent,
    NavigationComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //HttpModule,
    FormsModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
