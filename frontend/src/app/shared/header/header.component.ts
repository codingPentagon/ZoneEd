import {Component, Input} from '@angular/core';
import {NotificationToggleService} from "../notification/notification-toggle.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  hidden = false;

  constructor(private notifToggleService:NotificationToggleService) {
  }

  notifToggle(){
    this.notifToggleService.toggle();
    this.hidden = !this.hidden;
  }

}
