import { Component, Input } from '@angular/core';
import {
  faXmark,
  faFilm,
  faTv,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { Item } from '../item';

@Component({
  selector: 'app-bs-menu',
  templateUrl: './bs-menu.component.html',
  styleUrls: ['./bs-menu.component.css'],
})
export class BsMenuComponent {
  @Input() items: Item[] = [];

  faXmark = faXmark;
}
