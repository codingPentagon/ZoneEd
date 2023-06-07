import {Component } from '@angular/core';


@Component({
  selector: 'app-calendar-drawer',
  templateUrl: './calendar-drawer.component.html',
  styleUrls: ['./calendar-drawer.component.css']
})
export class CalendarDrawerComponent {

  //calendar toggle
  isOpen: boolean = false;
  sclID: number = 5555;

  constructor() {
  }

  ngOnInit() {

  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
