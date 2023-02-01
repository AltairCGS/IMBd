import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


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

  miVariable: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    slideBy: 6,
    navText: ['<i class="fa-solid fa-angle-right"></i>', '<i class="fa-solid fa-angle-left"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  constructor() { }
  
  ngOnInit() {
  }
  
  }