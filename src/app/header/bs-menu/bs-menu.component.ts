import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../item';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-bs-menu',
  templateUrl: './bs-menu.component.html',
  styleUrls: ['./bs-menu.component.css'],
})
export class BsMenuComponent implements OnInit {
  items: Item[] = [];
  faXmark = faXmark;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.menuItemsBehaviorSubject.subscribe((items) => {
      this.items = items;
    });
  }
}
