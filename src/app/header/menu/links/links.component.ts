import { Component, Input } from '@angular/core';
import { faCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SubItem } from '../../sub-item';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent {
  @Input() icon: IconDefinition = faCircle;
  @Input() title: string = '';
  @Input() items: SubItem[] = [];

  faCircle = faCircle;
}
