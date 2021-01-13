import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.sass']
})
export class AllItemsComponent implements OnInit {

  breakpoint: number;
  value = 'Clear me';

  constructor() {}

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
  }
  
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }

}
