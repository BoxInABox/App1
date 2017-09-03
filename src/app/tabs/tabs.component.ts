import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  private visible: boolean;

  constructor() { }

  toggleVisibility() {
    this.visible = !this.visible;
  }

  ngOnInit() {
  }

}
