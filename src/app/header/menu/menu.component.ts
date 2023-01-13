import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() isOpened = false;
  @Output() close = new EventEmitter();

  icon = faFilm;
  items = [
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
  ];

  closeMenu() {
    this.close.emit();
  }
}
