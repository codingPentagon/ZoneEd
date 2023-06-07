import {Component} from '@angular/core';
import {NotificationService} from "../../services/notification.service";
import {Notification, NotificationToken} from "../../models/notification.model";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  userID = 3333;
  isOpen:boolean = false;

  constructor(private notifService : NotificationService) {
  }

  toggleNotif(){
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    this.getUnreadNotifCount();
    this.getNotifications();
    this.getToken();
  }

  getNotifications(){
    this.notifService.getNotifications(this.userID).subscribe({
      next: res => {
        this.notifs=res
        console.log(res)
      }
    })
  }

  updateNotification(notification: Notification, read: boolean){
    notification.isRead=read;
    this.notifService.updateNotification(notification).subscribe({
      complete:()=>{
        this.getNotifications();
      }
    })
  }

  getToken(){
    this.notifService.requestPermission().subscribe({
      next: token => {
        if (token){
          const notifToken : NotificationToken={
            id :0,
            token: token,
            userID: this.userID
          }
          this.notifService.addToken(notifToken);
        }
      }
    });
    this.notifService.listen();
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
