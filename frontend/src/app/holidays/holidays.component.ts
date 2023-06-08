import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Holiday} from "../models/calendar.model";

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent {
  @Input() disableCreation:boolean = false;
  @Input() holidays!:Holiday[];
  @Output() refresh:EventEmitter<null> = new EventEmitter<null>();
}
