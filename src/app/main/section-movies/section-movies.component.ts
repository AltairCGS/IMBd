import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-section-movies',
  templateUrl: './section-movies.component.html',
  styleUrls: ['./section-movies.component.css']
})
/*  export class SectionMoviesComponent {
  title = 'Section Movies';

  constructor() { }
  
  ngOnInit( ) {
    console.log('Section Movies Component');
  }



}  */

export class SectionMoviesComponent implements OnInit {

  cards = [
  {
  image: 'https://via.placeholder.com/160x160',
  alt: 'Card 1',
  rating: 4.5,
  title: 'Título de la tarjeta 1'
  },
  {
  image: 'https://via.placeholder.com/160x160',
  alt: 'Card 2',
  rating: 3.5,
  title: 'Título de la tarjeta 2'
  },
  {
  image: 'https://via.placeholder.com/160x160',
  alt: 'Card 3',
  rating: 4,
  title: 'Título de la tarjeta 3'
  }
  ];
  
  constructor() { }
  
  ngOnInit() {
  }
  
  }