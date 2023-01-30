import {Component, Input} from '@angular/core';
import {CalendarToggleService} from "../calendar/calendar-toggle.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private calToggleService:CalendarToggleService) {
  }

  calendarToggle(){
    this.calToggleService.toggle();
  }
}
