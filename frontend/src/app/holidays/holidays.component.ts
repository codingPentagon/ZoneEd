import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CalendarDetail, Holiday} from "../models/calendar.model";

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
}
