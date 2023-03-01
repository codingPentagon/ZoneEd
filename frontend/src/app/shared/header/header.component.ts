import {Component} from '@angular/core';
import {NotificationConnectorService} from "../notification/notification-connector.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public notifConService: NotificationConnectorService) {
  }

  notifToggle() {
    this.notifConService.toggle();
    this.notifConService.getUnreadNotifCount();
  }
}
