import { Component, Input } from '@angular/core';
import { Item } from '../../item';

@Component({
  selector: 'app-accordion-menu',
  templateUrl: './accordion-menu.component.html',
  styleUrls: ['./accordion-menu.component.css'],
})
export class AccordionMenuComponent {
  @Input() items: Item[] = [];
}
