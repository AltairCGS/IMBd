import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() isOpened = false;
  @Output() close = new EventEmitter();

  closeMenu() {
    this.close.emit();
  }
}
