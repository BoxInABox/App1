import { Tab } from '../item/item.model';
import {Observable, Observer} from 'rxjs/Rx';
import {Data} from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class TabsService {

  private tabs: Tab[] = []; // create array to hold my values
  constructor() { }

  getTabs() { // we use a constant so that it doesn't change anymore
    const loader = Observable.create((observer: Observer<Tab[]>) => {
      observer.next(this.tabs); // creates an observable for the array
    });
    return loader;
  }

  addTab(tab: Tab) {
    this.tabs.push(tab); // push the new item in the Tab array
  }
}
