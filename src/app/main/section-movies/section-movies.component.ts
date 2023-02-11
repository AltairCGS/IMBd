import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-section-movies',
  templateUrl: './section-movies.component.html',
  styleUrls: ['./section-movies.component.css']
})

export class SectionMoviesComponent implements OnInit {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    slideBy: -6,
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
  
  ngOnInit( ) {
    console.log('Section Movies Component');
  }

  movieCollection: Movie[] = [
    {
      titleMovie: 'The last of us',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BODljOTY2NzEtZGM1OC00MGM3LWIxZTYtOTg0NmIzNzg1ZjUzXkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_QL75_UX280_CR0,0,280,414_.jpg',
      calificacion: '9.3',
      trailer: 'https://www.youtube.com/watch?v=yyGetSp7CIc'
    }, {
      titleMovie: 'El menú',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BMzdjNjI5MmYtODhiNS00NTcyLWEzZmUtYzVmODM5YzExNDE3XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_QL75_UX280_CR0,3,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=RbqsyxVXJfM',
      calificacion: '7.2'
    }, {
      titleMovie: 'Glass Onion',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BZmE2YWE1MDgtODgwYS00N2JjLTg4NGMtMzkyYTZhNjA0MTFhXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_QL75_UX280_CR0,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=tFXrdgtNBD4',
      calificacion: '7.2'
    }, {
      titleMovie: 'Avatar: El camino del agua',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_QL75_UY414_CR5,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=bDFKIs4v0B4',
      calificacion: '7.8'
    }, {
      titleMovie: 'Los espiritus de la isla',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BMjQwZjY2YTUtZTQ2YS00Yjg2LWFjNTEtYTcyZjE1ZWIyMjcxXkEyXkFqcGdeQXVyNjM0MTI4Mw@@._V1_QL75_UX280_CR0,2,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=WeahdxUCuFk',
      calificacion: '7.8'
    }, {
      titleMovie: 'Mission Majnu',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BYTYwYmI0NGItYmFkYi00NzViLWIwMGEtNGNjYjQwYjY1NTQ1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UY414_CR26,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=Gw77Nx4eBMc',
      calificacion: '7.9'
    }, {
      titleMovie: 'Merlina',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BMmI2NDg3YzUtY2NmMS00ZjhkLWE3ODgtMjMxNDkxNTAzMGRhXkEyXkFqcGdeQXVyMTU2Mjg2NjE2._V1_QL75_UX280_CR0,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=gmp7LTKnVPo',
      calificacion: '8.2'
    }, {
      titleMovie: 'Todo en todas partes al mismo tiempo',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BNDE1NzMzZDEtYzE4OS00MTRjLTg4NmUtMDcyMGM3ZGMwY2VlXkEyXkFqcGdeQXVyNjM0MTI4Mw@@._V1_QL75_UY414_CR26,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=Gw77Nx4eBMc',
      calificacion: '8.0'
    }, {
      titleMovie: 'El gato con botas: El último deseo',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BZjNiMjkzMDItOWNjMy00ODZjLTgwY2UtZTEyODYzNTI2NzI1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_QL75_UY414_CR26,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=Gw77Nx4eBMc',
      calificacion: '7.9'
    }, {
      titleMovie: 'Sin novedad en el frente',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BYTE1MmZiMWYtYTFmZi00YjA3LWI2ODgtMWFlNWYxZjdmNGE3XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_QL75_UY414_CR26,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=Gw77Nx4eBMc',
      calificacion: '7.8'
    }, {
      titleMovie: 'Babylon',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BNjUwMjYyNTktNDIyZC00NmU0LWFkNzAtZTVjMTNjZDY4MDlmXkEyXkFqcGdeQXVyNjM0MTI4Mw@@._V1_QL75_UY414_CR1,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=Gw77Nx4eBMc',
      calificacion: '7.5'
    }, {
      titleMovie: 'Top Gun: Marerick',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX280_CR0,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=Gw77Nx4eBMc',
      calificacion: '8.3'
    }, {
      titleMovie: 'Mission Majnu',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX280_CR0,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=Gw77Nx4eBMc',
      calificacion: '6.5'
    }, {
      titleMovie: 'Mission Majnu',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX280_CR0,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=Gw77Nx4eBMc',
      calificacion: '6.5'
    }, {
      titleMovie: 'Mission Majnu',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX280_CR0,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=Gw77Nx4eBMc',
      calificacion: '6.5'
    }, {
      titleMovie: 'Mission Majnu',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX280_CR0,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=Gw77Nx4eBMc',
      calificacion: '9.0'
    }, {
      titleMovie: 'Mission Majnu',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX280_CR0,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=Gw77Nx4eBMc',
      calificacion: '6.5'
    }, {
      titleMovie: 'Mission Majnu',
      movieImage: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX280_CR0,0,280,414_.jpg',
      trailer: 'https://www.youtube.com/watch?v=Gw77Nx4eBMc',
      calificacion: '6.5'
    }
  ];
}

interface Movie {
  titleMovie: string;
  movieImage: string;
  calificacion: string;
  trailer: string;
}