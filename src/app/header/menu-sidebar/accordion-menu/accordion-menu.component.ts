import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../item';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-accordion-menu',
  templateUrl: './accordion-menu.component.html',
  styleUrls: ['./accordion-menu.component.css'],
})
export class AccordionMenuComponent implements OnInit {
  items: Item[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.menuItemsBehaviorSubject.subscribe((items) => {
      this.items = items;
    });
  }
}
