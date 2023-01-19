import { Component } from '@angular/core';
import {
  faBars,
  faFilm,
  faTv,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { Item } from './item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faBars = faBars;
  // isMenuOpened = false;

  items: Item[] = [
    {
      icon: faFilm,
      title: 'Movies',
      subItems: [
        {
          path: '/',
          text: 'item 1',
        },
        {
          path: '/',
          text: 'item 2',
        },
        {
          path: '/',
          text: 'item 3',
        },
      ],
    },
    {
      icon: faTv,
      title: 'TV Shows',
      subItems: [
        {
          path: '/',
          text: 'item 4',
        },
        {
          path: '/',
          text: 'item 5',
        },
        {
          path: '/',
          text: 'item 6',
        },
      ],
    },
    {
      icon: faUserGroup,
      title: 'Celebs',
      subItems: [
        {
          path: '/',
          text: 'item 7',
        },
        {
          path: '/',
          text: 'item 8',
        },
        {
          path: '/',
          text: 'item 9',
        },
      ],
    },
  ];

  /* toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  } */
}
