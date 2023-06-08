import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {CalendarDetail, SchoolEvent} from "../models/calendar.model";
import {NgForm} from "@angular/forms";
import {CalendarService} from "../services/calendar.service";

@Component({
  selector: 'app-school-events',
  templateUrl: './school-events.component.html',
  styleUrls: ['./school-events.component.css']
})
export class SchoolEventsComponent {
  @Input() disableCreation:boolean = false;
  @Input() events!:SchoolEvent[];
  @Input() calendar!:CalendarDetail;
  @Output() refresh:EventEmitter<null> = new EventEmitter<null>();

  create: boolean = false;
  delete: boolean = false;
  deleteItems: number[] = [];
  headerDisabled: boolean = false;

  constructor(private calendarService: CalendarService) {

  }

  ngOnChanges(changes:SimpleChanges) {
    this.headerDisabled = changes['calendar'].currentValue == undefined;
    console.log(this.headerDisabled)
  }


  createToggle() {
    this.create = !this.create && !this.headerDisabled;
    this.delete = false;
  }

  deleteToggle() {
    this.delete = !this.delete && !this.headerDisabled;
    this.create = false;
  }

  deleteEvents() {
    this.calendarService.deleteEvents(this.deleteItems).subscribe({
      complete: () => {
        this.refresh.emit();
      }
    });
  }

  createEvent(newEvent: NgForm) {
    const dates: Date[] = [];
    for (let d = newEvent.value.startDate; d <= newEvent.value.endDate; d.setDate(d.getDate() + 1)) {
      dates.push(new Date(d));
    }

    const event: SchoolEvent = {
      id: 0,
      dates: dates,
      title: newEvent.value.title,
      calendarID: this.calendar.id,
      lastUpdated: new Date()
    };
    this.calendarService.addEvent(event).subscribe({
      complete: () => {
        this.refresh.emit();
      }
    });
  }

  toggleDeleteItem(id: number) {
    const index = this.deleteItems.indexOf(id);
    if (index > -1) {
      this.deleteItems.splice(index, 1);
    }
    else {
      this.deleteItems.push(id);
    }
  }
}
