import { Component, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.css'],
})
export class MenuSidebarComponent {
  @Input() items: Item[] = [];
}
