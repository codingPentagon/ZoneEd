import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {CalendarDetail, Holiday} from "../models/calendar.model";
import {CalendarService} from "../services/calendar.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent {
  @Input() disableCreation:boolean = false;
  @Input() holidays!:Holiday[];
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
  }


  createToggle() {
    this.create = !this.create && !this.headerDisabled;
    this.delete = false;
  }

  deleteToggle() {
    this.delete = !this.delete && !this.headerDisabled;
    this.create = false;
  }

  deleteHolidays() {
    this.calendarService.deleteHolidays(this.deleteItems).subscribe({
      complete: () => {
        this.refresh.emit();
      }
    });
  }

  createHoliday(newHoliday: NgForm) {
    const holiday: Holiday = {
      id: 0,
      date: newHoliday.value.date,
      title: newHoliday.value.title,
      calendarID: newHoliday.value.type == 'school' ? this.calendar.id : 0,
    };
    this.calendarService.addHoliday(holiday).subscribe({
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
