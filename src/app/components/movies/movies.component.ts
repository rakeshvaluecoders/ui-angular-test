import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  httpSubscription: Subscription
  public moviesData:any = [];
  searched : string;

  constructor(private http: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }


  getMovies() {
    this.httpSubscription = this.http.get('http://www.omdbapi.com/?apikey=a4839531&s=bat').subscribe(result => {
      this.moviesData = result.Search;
      console.log( "my datea------",  this.moviesData);
    })
  }

  searchMovie() {
    this.httpSubscription = this.http.get('http://www.omdbapi.com/?apikey=a4839531&s='+ this.searched).subscribe(result => {
      this.moviesData = result.Search;
      console.log( "my datea------",  this.moviesData);
    })
  }

  // ngOnDetroy() {
  //   this.httpSubscription && this.httpSubscription.unsubscribe();
  // }

}



