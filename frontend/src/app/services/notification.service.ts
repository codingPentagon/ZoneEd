import { Injectable } from '@angular/core';
import {Notification} from "../models/notification.model";
import {HttpClient} from "@angular/common/http";

const url = 'http://localhost:8080/notifications/'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  createNotification(receiverID:number, content:string, event:string){
    const notif :Notification = {
      id : 0,
      receiverID : receiverID,
      date : new Date(),
      time : {hours: new Date().getHours(), minutes: new Date().getMinutes()},
      content : content,
      event : event,
      isRead : false,

    }
    this.http.post(url,notif)
  }

  getNotifications(userID: number) {
    return this.http.get<Notification[]>(url+userID.toString());
  }
}

