import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SchoolEvent} from "../models/calendar.model";

@Component({
  selector: 'app-school-events',
  templateUrl: './school-events.component.html',
  styleUrls: ['./school-events.component.css']
})
export class SchoolEventsComponent {
  @Input() disableCreation:boolean = false;
  @Input() events!:SchoolEvent[];
  @Output() refresh:EventEmitter<null> = new EventEmitter<null>();

  create: boolean = false;
  delete: boolean = false;

  createToggle() {
    this.create = !this.create;
    this.delete = false;
  }

  deleteToggle() {
    this.delete = !this.delete;
    this.create = false;
  }
}
