import {Component, HostBinding} from '@angular/core';
import {NotificationToggleService} from "./notification-toggle.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {


  @HostBinding('class.is-open')
  isOpen:boolean = false;

  constructor(private notifToggleService:NotificationToggleService) {
  }

  ngOnInit() {
    this.notifToggleService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  notifs:any = [
    {notification: "Mr Prasad(Zonal Director) approve for the project proposal.", date:"31/01/2023", time:"5 min ago", read:false},
    {notification: "Mr Prasad(Zonal Director) approve for the project proposal.", date:"31/01/2023", time:"5 min ago", read:false},
    {notification: "Mr Prasad(Zonal Director) approve for the project proposal.", date:"31/01/2023", time:"5 min ago", read:false},
    {notification: "Mr Prasad(Zonal Director) approve for the project proposal.", date:"31/01/2023", time:"5 min ago", read:false}
  ]
}
