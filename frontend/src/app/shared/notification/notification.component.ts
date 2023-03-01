import {Component, HostBinding} from '@angular/core';
import {NotificationConnectorService} from "./notification-connector.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  @HostBinding('class.is-open')
  isOpen:boolean = false;

  constructor(public notifConService:NotificationConnectorService) {
  }

  ngOnInit() {
    this.notifConService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
    this.notifConService.getUnreadNotifCount();
  }


}
