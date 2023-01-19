import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  faFilm,
  faTv,
  faUserGroup,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Item } from '../item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() isOpened = false;
  @Output() close = new EventEmitter();

  faXmark = faXmark;
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

  closeMenu() {
    this.close.emit();
  }
}
