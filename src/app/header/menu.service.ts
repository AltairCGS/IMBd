import { Injectable } from '@angular/core';
import { faFilm, faTv, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  // menuItemsObservable: Observable<Item[]> = new Observable((subscriber) => {
  //   setTimeout(() => {
  //     const items: Item[] = [
  //       {
  //         icon: faFilm,
  //         title: 'Movies',
  //         subItems: [
  //           {
  //             path: '/',
  //             text: 'item 1',
  //           },
  //           {
  //             path: '/',
  //             text: 'item 2',
  //           },
  //           {
  //             path: '/',
  //             text: 'item 3',
  //           },
  //         ],
  //       },
  //       {
  //         icon: faTv,
  //         title: 'TV Shows',
  //         subItems: [
  //           {
  //             path: '/',
  //             text: 'item 4',
  //           },
  //           {
  //             path: '/',
  //             text: 'item 5',
  //           },
  //           {
  //             path: '/',
  //             text: 'item 6',
  //           },
  //         ],
  //       },
  //       {
  //         icon: faUserGroup,
  //         title: 'Celebs',
  //         subItems: [
  //           {
  //             path: '/',
  //             text: 'item 7',
  //           },
  //           {
  //             path: '/',
  //             text: 'item 8',
  //           },
  //           {
  //             path: '/',
  //             text: 'item 9',
  //           },
  //         ],
  //       },
  //     ];
  //     subscriber.next(items);
  //     subscriber.complete();
  //     console.log('items loaded');
  //   }, 5000);
  // });

  menuItemsBehaviorSubject: BehaviorSubject<Item[]> = new BehaviorSubject<
    Item[]
  >([]);

  constructor() {}
}
