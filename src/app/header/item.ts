import { IconName } from '@fortawesome/free-solid-svg-icons';
import { SubItem } from './sub-item';

export interface Item {
  icon: IconName;
  title: string;
  subItems: SubItem[];
}
