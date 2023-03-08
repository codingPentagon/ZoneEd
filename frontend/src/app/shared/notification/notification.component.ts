import {Component, HostBinding} from '@angular/core';
import {NotificationConnectorService} from "./notification-connector.service";
import {NotificationService} from "../../services/notification.service";
import {Notification} from "../../models/notification.model";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  userID = 1000;
  notifs : Notification[]= [];

  @HostBinding('class.is-open')
  isOpen:boolean = false;

  constructor(public notifConService:NotificationConnectorService,
              private notifService : NotificationService) {
  }

  ngOnInit() {
    this.notifConService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
    this.notifConService.getUnreadNotifCount();

    this.notifService.getNotifications(this.userID).subscribe({
      next: res => {
        this.notifs=res
      }
    })
  }


}
