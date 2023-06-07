import {Injectable} from '@angular/core';
import {Notification, NotificationToken} from "../models/notification.model";
import {HttpClient} from "@angular/common/http";
import {AngularFireMessaging} from "@angular/fire/compat/messaging";
import {environment} from "../../environments/environment.development";

const url = 'http://localhost:8080/notifications/'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private http: HttpClient, private fireMessaging: AngularFireMessaging) {
  }

  requestPermission() {
    return this.fireMessaging.requestToken
  }

  listen() {
    return this.fireMessaging.messages
  }

  addToken(token: NotificationToken) {
    return this.http.post(url + 'tokens', token);
  }

  createNotification(receiverID: number, content: string, event: string) {
    this.fetchTokenSet(receiverID).subscribe({
      next: res => {
        console.log(res)
        res.tokens.forEach(token => {
          this.sendNotification(token, content, event);
        })
      }
    })

    const notif: Notification = {
      id: 0,
      receiverID: receiverID,
      date: new Date(),
      content: content,
      event: event,
      isRead: false,
    }
    this.addNotification(notif).subscribe({
      next: () => {
        console.log("notification saved")
      }
    })
  }

  addNotification(notif: Notification) {
    return this.http.post(url, notif);
  }

  sendNotification(token: string, content: string, event: string) {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "key="+environment.severKey
    }
    const body = {
      "to": token,
      "notification": {
        "title": event,
        "body": content
      }
    }
    this.http.post('https://fcm.googleapis.com/fcm/send', body, {headers: headers}).subscribe({
      next: res => {
        console.log(res)
      }
    })
  }

  fetchTokenSet(userID: number) {
    return this.http.get<NotificationToken>(url +'tokens/'+userID.toString())
  }

  getNotifications(userID: number) {
    return this.http.get<Notification[]>(url + userID.toString());
  }

  updateNotification(notification: Notification) {
    return this.http.put(url, notification);
  }
}

