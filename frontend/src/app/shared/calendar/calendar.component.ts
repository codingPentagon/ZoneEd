import {Component, HostBinding} from '@angular/core';
import {CalendarToggleService} from "./calendar-toggle.service";

@Component({
  selector: 'app-notification',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class NotificationComponent {

  @HostBinding('class.is-open')
  isOpen:boolean = false;

  constructor(private calToggleService:CalendarToggleService) {
  }

  ngOnInit() {
    this.calToggleService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }
}
