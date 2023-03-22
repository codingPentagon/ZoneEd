import { Injectable } from '@angular/core';
import {Notification} from "../models/notification.model";
import {HttpClient} from "@angular/common/http";
import {AngularFireMessaging} from '@angular/fire/compat/messaging'
import {} from "@angular/fire/compat/messaging";

const url = 'http://localhost:8080/notifications/'


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient, private fireNotification:AngularFireMessaging) {
    this.fireNotification.requestToken.subscribe((token)=>{
      console.log(token);
    });

  }

  createNotification(receiverID:number, content:string, event:string){
    const notif :Notification = {
      id : 0,
      receiverID : receiverID,
      date : new Date(),
      time : new Date().getHours().toString()+ new Date().getMinutes().toString(),
      content : content,
      event : event,
      isRead : false,

    }
    return this.http.post(url,notif)
  }

  getNotifications(userID: number) {
    return this.http.get<Notification[]>(url+userID.toString());
  }

  updateNotification(notification:Notification){
    return this.http.put(url,notification);
  }

}

