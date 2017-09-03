import { Component, OnInit } from '@angular/core';
import {Tab} from '../item/item.model'; // import the array from item.model.ts
import {TabsService} from '../tabs/tabs.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tabs: Tab[];

  constructor(private service: TabsService) { }

  ngOnInit() {
    this.service.getTabs().subscribe(
      tabs => this.tabs = tabs // the value that will be returned is an observable array
    );
  }

}
