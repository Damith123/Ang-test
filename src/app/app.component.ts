import { Component, OnInit } from '@angular/core';

export interface TabItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'test';

  tabs: TabItem[] = [
    {
      label: 'All',
      route: 'all-orders',
    },
    {
      label: 'Ongoing Orders',
      route: 'ongoing-orders',
    },
  ];

  ngOnInit() {}

}
