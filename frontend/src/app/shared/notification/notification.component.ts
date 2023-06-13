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
  notifs: Notification[] = [];
  notifCount: number = 0;

  constructor(private notifService : NotificationService) {
    this.getNotifications();
    setInterval(() => this.getNotifications(), 5000);
    this.getToken();
  }

  toggleNotif(){
    this.isOpen = !this.isOpen;
  }

  getNotifications(){
    this.notifService.getNotifications(this.userID).subscribe({
      next: res => {
        this.notifs=res
        console.log(res)
      },
      complete:()=>{
        this.getUnreadNotifCount();
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
            tokens: [token],
            userID: this.userID
          }
          this.notifService.addToken(notifToken).subscribe();
        }
        console.log(token)
      }
    });
    this.notifService.listen().subscribe({
      next:res=>{
        console.log(res)
      }
    });
  }


  getUnreadNotifCount() {
    this.notifCount = this.notifs.filter(notif => !notif.isRead).length;
  }

  go(){
    this.notifService.createNotification(3333, "new Project created by Mr. Ranil", "Project management");
  }
}
