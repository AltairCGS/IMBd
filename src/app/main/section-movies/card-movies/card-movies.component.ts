import { Component } from '@angular/core';


@Component({
  selector: 'app-card-movies',
  templateUrl: './card-movies.component.html',
  styleUrls: ['./card-movies.component.css']
})
export class CardMoviesComponent {
  title = 'Card Movies';

  constructor() { }
  
  ngOnInit( ) {
    console.log('Card Movies Component');
  }

}

