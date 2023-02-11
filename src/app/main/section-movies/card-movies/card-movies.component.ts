import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card-movies',
  templateUrl: './card-movies.component.html',
  styleUrls: ['./card-movies.component.css']
})
export class CardMoviesComponent {
  @Input() titleCard: string = "";
  @Input() imageCard: string = "";
  @Input() calificacion: string = "";
  @Input() trailer: string = "";

  title = 'Card Movies';
  

  constructor() { }
  
  ngOnInit( ) {
    console.log('Card Movies Component');
  }

}

