import { Component, Input } from '@angular/core';
import {
  faCircle,
  IconName,
} from '@fortawesome/free-solid-svg-icons';
import { SubItem } from '../../sub-item';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent {
  @Input() icon: IconName = 'circle';
  @Input() title: string = '';
  @Input() items: SubItem[] = [];

  faCircle = faCircle;
}
