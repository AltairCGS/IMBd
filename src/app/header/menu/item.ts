import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SubItem } from './sub-item';

export interface Item {
  icon: IconDefinition;
  title: string;
  subItems: SubItem[];
}
