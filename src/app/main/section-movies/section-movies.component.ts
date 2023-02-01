import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-movies',
  templateUrl: './section-movies.component.html',
  styleUrls: ['./section-movies.component.css']
})


export class SectionMoviesComponent {
  title = 'Section Movies';

  listPrueba: string[] = ["texto tarea 1", "texto tarea 2", "texto tarea 3", "texto 4", "texto 5", "texto 6"];

  constructor() { }
  
  ngOnInit( ) {
    console.log('Section Movies Component');
  }

  movieCollection: Movie[] = [
    {
      titleMovie: 'The last of us',
      thumbImage: 'https://loremflickr.com/g/1200/800/paris',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      titleMovie: 'El menú',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      titleMovie: 'Glass Onion',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      titleMovie: 'Avatar: El camino del agua',
      thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      titleMovie: 'Los espiritus de la isla',
      thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      titleMovie: 'Mission Majnu',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 6',
      alt: 'Image 6'
    }, {
      titleMovie: 'Mission Majnu',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    }, {
      titleMovie: 'Mission Majnu',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    }, {
      titleMovie: 'Mission Majnu',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    }, {
      titleMovie: 'Mission Majnu',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    }, {
      titleMovie: 'Mission Majnu',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    }, {
      titleMovie: 'Mission Majnu',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    }, {
      titleMovie: 'Mission Majnu',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    }, {
      titleMovie: 'Mission Majnu',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    }, {
      titleMovie: 'Mission Majnu',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    }, {
      titleMovie: 'Mission Majnu',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    }, {
      titleMovie: 'Mission Majnu',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    }, {
      titleMovie: 'Mission Majnu',
      thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
      title: 'Image 7',
      alt: 'Image 7'
    }
  ];

} 

interface Movie {
  titleMovie: string;
  thumbImage: string;
  alt: string;
  title: string;
}
