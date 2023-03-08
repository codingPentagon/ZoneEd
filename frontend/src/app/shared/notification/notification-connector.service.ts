import {Injectable, Output, EventEmitter} from '@angular/core'

@Injectable()
export class NotificationConnectorService {

  isOpen: boolean = true;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.change.emit(this.isOpen);
  }

  notifs: any = [
    {
      notification: "Mr Prasad(Zonal Director) approve for the project proposal.",
      date: "31/01/2023",
      time: "5 min ago",
      read: false
    },
    {
      notification: "Mr Prasad(Zonal Director) approve for the project proposal.",
      date: "31/01/2023",
      time: "5 min ago",
      read: false
    },
    {
      notification: "Mr Prasad(Zonal Director) approve for the project proposal.",
      date: "31/01/2023",
      time: "5 min ago",
      read: false
    },
    {
      notification: "Mr Prasad(Zonal Director) approve for the project proposal.",
      date: "31/01/2023",
      time: "5 min ago",
      read: false
    }
  ]

  notifCount: number = 0;

  getUnreadNotifCount() {
    this.notifCount = 0;
    for (let notif of this.notifs) {
      if (!notif.read) {
        this.notifCount++;
      }
    }
  }
}
